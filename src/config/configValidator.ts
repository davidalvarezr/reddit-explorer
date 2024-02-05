import { RedditClientConfiguration } from "./RedditClientConfiguration"
import { ConfigurationError } from "./ConfigurationError"

export const validateConfig = (config: RedditClientConfiguration) => {
    const { clientId, secret, limit } = config

    if (!clientId) {
        throw new ConfigurationError(ConfigurationError.MISSING_CLIENT_ID())
    }

    if (!secret) {
        throw new ConfigurationError(ConfigurationError.MISSING_CLIENT_SECRET())
    }

    if (!!limit && (limit < 0 || limit > 100)) {
        throw new ConfigurationError(ConfigurationError.WRONG_LIMIT(limit))
    }
}
