import { RedditClientConfiguration } from "./RedditClientConfiguration"

export const defaultConfig: Partial<RedditClientConfiguration> = {
    userAgent: "reddit-explorer npm package (by /u/davalres)",
    grantType: "client_credentials",

    // request config
    matureContent: false,
    limit: 25,
}
