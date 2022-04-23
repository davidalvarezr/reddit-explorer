import { createRedditClient } from "../src"
import { secrets } from "../src/secrets"
import { RedditClient } from "../src/types/RedditClient"

let client: RedditClient

beforeAll(() => {
    client = createRedditClient({ clientId: secrets.clientId, secret: secrets.secret })
})

test("Should retrieve access token", async () => {
    const accessTokenResponse = await client.getAccessToken()
    expect(Object.keys(accessTokenResponse)).toEqual(
        expect.arrayContaining(["access_token", "token_type", "device_id", "expires_in", "scope"])
    )
})

test("Should retrieve safe names", async () => {
    const res = await client.getSubredditNames({ query: "anal" })
    expect(res.names).not.toContain("anal")
})

test("Should retrieve adult names (change config)", async () => {
    client.config.setMatureContent(true)
    const res = await client.getSubredditNames({ query: "anal" })
    expect(res.names).toContain("anal")
})

test("Should retrieve adult names (init config)", async () => {
    client = createRedditClient({ clientId: secrets.clientId, secret: secrets.secret, matureContent: true })
    const res = await client.getSubredditNames({ query: "anal" })
    expect(res.names).toContain("anal")
})
