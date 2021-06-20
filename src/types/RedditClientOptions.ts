export type RedditClientOptions = {
    clientId: string
    secret: string
    userAgent?: string
    grantType?: string
    deviceId?: string
    debug?: {
        logToken: boolean
    }
}
