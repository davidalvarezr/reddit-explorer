import { Endpoint } from "../constants/Endpoint"

export const defaultConfig = {
    userAgent: "reddit-explorer npm package (by /u/davalres)",
    grantType: Endpoint.GrandType,
    matureContent: false,
    defaultLimit: 25,
}
