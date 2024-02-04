export enum ConfigErrorName {
    MissingClientId = "MissingClientId",
    MissingClientSecret = "MissingClientSecret",
    MissingGrantType = "MissingGrantType",
    WrongLimit = "WrongLimit",
}

export const validationErrors = {
    [ConfigErrorName.MissingClientId]: "'clientId' is missing",
    [ConfigErrorName.MissingClientSecret]: "'clientSecret' is missing",
    [ConfigErrorName.MissingGrantType]: "'grantType' is missing",
    [ConfigErrorName.WrongLimit]: "Wrong 'limit' given. Should be between [1, 100]",
}

export class ConfigurationError extends Error {
    name: ConfigErrorName
    message: string
    cause: any

    constructor({ name, message, cause }: { name: ConfigErrorName; message: string; cause?: any }) {
        super()
        this.name = name
        this.message = message
        this.cause = cause
    }
}
