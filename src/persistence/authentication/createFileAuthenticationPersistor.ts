import { AuthenticationPersistor, TokenAndExpiration } from "./AuthenticationPersistor.js"
import { isNode } from "../../helpers/isNode.js"

let fs = {} as any

if (isNode()) {
    import("fs").then((fsjean) => {
        fs = fsjean
    })
}

const filename = "token.txt"
const CR = "\n"

export const createFileAuthenticationPersistor = (): AuthenticationPersistor => {
    const persistAuthentication = (args: TokenAndExpiration) => {
        const { token, expirationTimestamp } = args

        fs.writeFileSync(filename, [token, expirationTimestamp].join(CR), {
            encoding: "utf-8",
        })
    }

    const retrieveAuthentication = (): TokenAndExpiration | undefined => {
        if (fs.existsSync(filename)) {
            const rawTokenAndExpiration = fs.readFileSync(filename, { encoding: "utf-8" })
            const tokenAndExpiration = rawTokenAndExpiration.split(CR)
            const token = tokenAndExpiration[0]
            const expirationTimestamp = tokenAndExpiration[1] as unknown as number

            return { token, expirationTimestamp }
        }
    }

    return {
        persistAuthentication,
        retrieveAuthentication,
    }
}
