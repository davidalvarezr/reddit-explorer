import { defaultConfig } from "./config/defaultConfig"
import { Endpoint } from "./constants/Endpoint"
import { uuidv4 } from "./helpers/uuidv4"
import axios from "axios"
import { GetSubredditNamesArgs } from "./types/api/requests/GetSubredditNamesArgs"
import { GetSubredditNamesResponse } from "./types/api/responses/GetSubredditNamesResponse"
import { RedditClientConfiguration } from "./config/RedditClientConfiguration"
import { AccessTokenResponse } from "./types/api/responses/AccessTokenResponse"
import { GetSubredditArgs } from "./types/api/requests/GetSubredditArgs"
import { GetSubredditResponse } from "./types/api/responses/GetSubredditResponse"
import * as fs from "fs"

const filename = "token.txt"
const CR = "\n"

export const createRedditClient = (config: RedditClientConfiguration) => {
    const finalConfig = { ...defaultConfig, ...config }
    const { clientId, secret, userAgent, grantType, deviceId = uuidv4(), debug } = finalConfig
    let { matureContent } = finalConfig

    const api = axios.create({
        baseURL: Endpoint.BaseUrl,
    })

    let expirationTimestampInMilliseconds = 0
    let token = ""

    // Retrieving token info
    try {
        if (fs.existsSync(filename)) {
            const rawTokenAndExpiration = fs.readFileSync(filename, { encoding: "utf-8" })
            const tokenAndExpiration = rawTokenAndExpiration.split(CR)
            token = tokenAndExpiration[0]
            expirationTimestampInMilliseconds = tokenAndExpiration[1] as unknown as number
        }
    } catch (e) {
        console.error(e)
    }

    api.interceptors.request.use(async (axiosRequestConfig) => {
        if (Date.now() > expirationTimestampInMilliseconds) {
            const response = await getAccessToken()
            token = response.access_token
            expirationTimestampInMilliseconds = Date.now() + response.expires_in * 1000
        }

        axiosRequestConfig.headers.common["Authorization"] = "Bearer " + token

        debug?.logToken && console.log("token", token)

        return axiosRequestConfig
    })

    /**
     * Get access token for unauthenticated user
     */
    const getAccessToken = async () => {
        const params = new URLSearchParams()
        params.append("grant_type", grantType)
        params.append("device_id", deviceId)

        const response = await axios.post<AccessTokenResponse>(Endpoint.AccessToken, params, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": userAgent,
            },
            auth: {
                username: clientId,
                password: secret,
            },
        })

        // Persisting token info
        try {
            const {
                data: { access_token, expires_in: expiresInInSeconds },
            } = response
            fs.writeFileSync(filename, [access_token, Date.now() + expiresInInSeconds * 1000].join(CR), {
                encoding: "utf-8",
            })
        } catch (e) {
            console.error(e)
        }

        return response.data
    }

    const getSubreddit = async <TGetSubredditArgs extends GetSubredditArgs>(
        args: TGetSubredditArgs
    ): Promise<GetSubredditResponse<TGetSubredditArgs>> => {
        const { name, sortMethod, ...restParams } = args

        const response = await api.get<GetSubredditResponse<TGetSubredditArgs>>(`/r/${name}/${sortMethod}`, {
            params: restParams,
        })

        return response.data
    }

    async function* getSubredditIterator<TGetSubredditArgs extends GetSubredditArgs>(
        args: TGetSubredditArgs
    ): AsyncIterator<GetSubredditResponse<TGetSubredditArgs>, never, void> {
        let after: string | null = null

        while (true) {
            const res = await getSubreddit({
                after,
                ...args,
            })

            after = res.data.after

            yield res
        }
    }

    const getSubredditNames = async (params: GetSubredditNamesArgs): Promise<GetSubredditNamesResponse> => {
        const paramsWithConfig: GetSubredditNamesArgs = {
            include_over_18: matureContent,
            ...params,
        }

        const response = await api.get<GetSubredditNamesResponse>("/api/search_reddit_names", {
            params: paramsWithConfig,
        })

        return response.data
    }

    const conf = {
        setMatureContent: (newMatureContent: boolean) => {
            matureContent = newMatureContent
        },
    }

    return {
        getAccessToken,
        getSubreddit,
        getSubredditIterator,
        getSubredditNames,
        config: conf,
    }
}
