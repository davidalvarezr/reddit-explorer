import { defaultConfig } from "./constants/defaultConfig"
import { endpoints } from "./constants/endpoints"
import { uuidv4 } from "./helpers/uuidv4"
import axios from "axios"
import { GetSubredditNamesArgs } from "./types/api/requests/GetSubredditNamesArgs"
import { GetSubredditNames } from "./types/api/responses/GetSubredditNames"
import { RedditClientOptions } from "./types/RedditClientOptions"
import { AccessTokenResponse } from "./types/api/responses/AccessTokenResponse"
import { GetSubredditArgs } from "./types/api/requests/GetSubredditArgs"
import { GetSubreddit } from "./types/api/responses/GetSubreddit"

export const createRedditClient = (options: RedditClientOptions) => {
    const { clientId, secret, userAgent, grantType, deviceId = uuidv4(), debug } = { ...defaultConfig, ...options }

    const api = axios.create({
        baseURL: endpoints.baseUrl,
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
        const { accessToken } = endpoints

        const params = new URLSearchParams()
        params.append("grant_type", grantType)
        params.append("device_id", deviceId)

        const response = await axios.post<AccessTokenResponse>(accessToken, params, {
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
    const getSubreddit = async ({ name, sortMethod, ...restArgs }: GetSubredditArgs) => {
        const response = await api.get<GetSubreddit>(`/r/${name}/${sortMethod}`, { params: restArgs })

        return response.data
    }

    const getSubredditNames = async (args: GetSubredditNamesArgs) => {
        const response = await api.get<GetSubredditNames>("/api/search_reddit_names", { params: args })

        return response.data
    }

    return {
        getAccessToken,
        getSubreddit,
        getSubredditNames,
    }
}
