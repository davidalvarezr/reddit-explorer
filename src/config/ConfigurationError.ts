export class ConfigurationError extends Error {
    static MISSING_CLIENT_ID = (): Error => buildError("MISSING_CLIENT_ID", "'clientId' is missing")
    static MISSING_CLIENT_SECRET = (): Error => buildError("MISSING_CLIENT_SECRET", "'clientSecret' is missing")
    static WRONG_LIMIT = (limitGiven: number): Error =>
        buildError("WRONG_LIMIT", "Wrong 'limit' given. Should be between [0, 100]. Given: " + limitGiven)

    name: string
    message: string
    cause: any

    constructor({ name, message }: ConfError) {
        super(message)
        this.name = name
        this.message = message
        Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain
    }
}

const buildError = (name: string, message: string): Error => ({ name, message })
type ConfError = ReturnType<
    | typeof ConfigurationError.MISSING_CLIENT_ID
    | typeof ConfigurationError.MISSING_CLIENT_SECRET
    | typeof ConfigurationError.WRONG_LIMIT
>
