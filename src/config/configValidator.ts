import { RedditClientConfiguration } from "./RedditClientConfiguration"
import { ConfigErrorName, ConfigurationError, validationErrors } from "./ConfigurationError"

export const validateConfig = (config: RedditClientConfiguration) => {
    const { clientId, secret, grantType, limit } = config

    if (!clientId) {
        throw new ConfigurationError({
            name: ConfigErrorName.MissingClientId,
            message: validationErrors[ConfigErrorName.MissingClientId],
        })
    }

    if (!secret) {
        throw new ConfigurationError({
            name: ConfigErrorName.MissingClientSecret,
            message: validationErrors[ConfigErrorName.MissingClientSecret],
        })
    }

    if (!grantType) {
        throw new ConfigurationError({
            name: ConfigErrorName.MissingGrantType,
            message: validationErrors[ConfigErrorName.MissingGrantType],
        })
    }

    if (!!limit && (limit < 1 || limit > 100)) {
        throw new ConfigurationError({
            name: ConfigErrorName.WrongLimit,
            message: validationErrors[ConfigErrorName.WrongLimit],
        })
    }
}
