export type TokenAndExpiration = {
    token: string
    expirationTimestamp: number // in milliseconds
}

export interface AuthenticationPersistor {
    persistAuthentication(args: TokenAndExpiration): void
    retrieveAuthentication(): TokenAndExpiration | undefined
}
