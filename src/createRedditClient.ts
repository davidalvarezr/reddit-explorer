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

export const createRedditClient = (config: RedditClientConfiguration) => {
    const { clientId, secret, userAgent, grantType, deviceId = uuidv4(), debug } = { ...defaultConfig, ...config }

    const api = axios.create({
        baseURL: Endpoint.BaseUrl,
    })

    let expirationTimestamp = 0
    let token = ""

    api.interceptors.request.use(async (config) => {
        if (Date.now() > expirationTimestamp) {
            const response = await getAccessToken()
            token = response.access_token
            expirationTimestamp = Date.now() + response.expires_in
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
