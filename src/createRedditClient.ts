import { defaultConfig } from "./config/defaultConfig"
import { Endpoint } from "./constants/Endpoint"
import { uuidv4 } from "./helpers/uuidv4"
import axios from "axios"
import { GetSubredditNamesArgs } from "./types/api/requests/GetSubredditNamesArgs"
import { GetSubredditNames } from "./types/api/responses/GetSubredditNames"
import { RedditClientConfiguration } from "./config/RedditClientConfiguration"
import { AccessTokenResponse } from "./types/api/responses/AccessTokenResponse"
import { GetSubredditArgs } from "./types/api/requests/GetSubredditArgs"
import { GetSubreddit } from "./types/api/responses/GetSubreddit"
import * as fs from "fs"

const filename = "token.txt"
const CR = "\n"

export const createRedditClient = (config: RedditClientConfiguration) => {
    const { clientId, secret, userAgent, grantType, deviceId = uuidv4(), debug } = { ...defaultConfig, ...config }

    const api = axios.create({
        baseURL: Endpoint.BaseUrl,
    })

    let expirationTimestampInMilliseconds = 0
    let token = ""

    // Retrieving token info
    try {
        const rawTokenAndExpiration = fs.readFileSync(filename, { encoding: "utf-8" })
        const tokenAndExpiration = rawTokenAndExpiration.split(CR)
        token = tokenAndExpiration[0]
        expirationTimestampInMilliseconds = tokenAndExpiration[1] as unknown as number
    } catch (e) {
        console.error(e)
    }

    api.interceptors.request.use(async (config) => {
        if (Date.now() > expirationTimestampInMilliseconds) {
            const response = await getAccessToken()
            token = response.access_token
            expirationTimestampInMilliseconds = Date.now() + response.expires_in * 1000
        }

        config.headers.common["Authorization"] = "Bearer " + token

        debug?.logToken && console.log("token", token)

        return config
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

    /**
     * Get the content of a subreddit
     */
    const getSubreddit = async ({ name, sortMethod, ...restParams }: GetSubredditArgs): Promise<GetSubreddit> => {
        const response = await api.get<GetSubreddit>(`/r/${name}/${sortMethod}`, { params: restParams })

        return response.data
    }

    const getSubredditNames = async (params: GetSubredditNamesArgs): Promise<GetSubredditNames> => {
        const response = await api.get<GetSubredditNames>("/api/search_reddit_names", { params })

        return response.data
    }

    return {
        getAccessToken,
        getSubreddit,
        getSubredditNames,
    }
}
