import { Endpoint } from "../constants/Endpoint"
import { UserAgent } from "../constants/UserAgent"
import { RedditClientConfiguration } from "./RedditClientConfiguration"

export const defaultConfig: Partial<RedditClientConfiguration> = {
    userAgent: UserAgent.WindowsFirefox,
    grantType: Endpoint.GrandType,
    matureContent: false,
}
