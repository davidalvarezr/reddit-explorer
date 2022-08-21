import { AuthenticationPersistor, TokenAndExpiration } from "./AuthenticationPersistor.js"

const filename = "token.txt"
const CR = "\n"

export const createEmptyAuthenticationPersistor = (): AuthenticationPersistor => {
    const persistAuthentication = (args: TokenAndExpiration) => {}

    const retrieveAuthentication = (): TokenAndExpiration | undefined => {
        return undefined
    }

    return {
        persistAuthentication,
        retrieveAuthentication,
    }
}
