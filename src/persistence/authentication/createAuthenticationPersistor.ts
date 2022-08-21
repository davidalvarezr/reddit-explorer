import { AuthenticationPersistor } from "./AuthenticationPersistor.js"
import { createEmptyAuthenticationPersistor } from "./createEmptyAuthenticationPersistor.js"
import { createFileAuthenticationPersistor } from "./createFileAuthenticationPersistor.js"
import { isBrowser } from "../../helpers/isBrowser.js"

export const createAuthenticationPersistor = (): AuthenticationPersistor => {
    if (isBrowser()) return createEmptyAuthenticationPersistor()

    return createFileAuthenticationPersistor()
}
