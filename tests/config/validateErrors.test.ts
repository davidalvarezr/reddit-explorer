import { createRedditSimpleClient } from "../../src"
import { secrets } from "../../src/config/secrets"
import { ConfigurationError } from "../../src/config/ConfigurationError"

test("Should throw missing clientId", () => {
    const missingClientId = () => {
        createRedditSimpleClient({
            clientId: undefined as unknown as string,
            secret: secrets.secret,
            matureContent: true,
        })
    }

    expect(missingClientId).toThrow(ConfigurationError.MISSING_CLIENT_ID().message)
})

test("Should throw missing secret", () => {
    const missingClientId = () => {
        createRedditSimpleClient({
            clientId: secrets.clientId,
            secret: undefined as unknown as string,
            matureContent: true,
        })
    }

    expect(missingClientId).toThrow(ConfigurationError.MISSING_CLIENT_SECRET().message)
})

test("Should throw wrong limit (-1)", () => {
    const missingClientId = () => {
        createRedditSimpleClient({
            clientId: secrets.clientId,
            secret: secrets.secret,
            limit: -1,
        })
    }

    expect(missingClientId).toThrow(ConfigurationError.WRONG_LIMIT(-1).message)
})

test("Should throw wrong limit (101)", () => {
    const missingClientId = () => {
        createRedditSimpleClient({
            clientId: secrets.clientId,
            secret: secrets.secret,
            limit: 101,
        })
    }

    expect(missingClientId).toThrow(ConfigurationError.WRONG_LIMIT(101).message)
})

test("Should NOT throw wrong limit (0)", () => {
    const missingClientId = () => {
        createRedditSimpleClient({
            clientId: secrets.clientId,
            secret: secrets.secret,
            limit: 0,
        })
    }

    expect(missingClientId).not.toThrow(ConfigurationError.WRONG_LIMIT(0).message)
})

test("Should NOT throw wrong limit (100)", () => {
    const missingClientId = () => {
        createRedditSimpleClient({
            clientId: secrets.clientId,
            secret: secrets.secret,
            limit: 100,
        })
    }

    expect(missingClientId).not.toThrow(ConfigurationError.WRONG_LIMIT(100).message)
})
