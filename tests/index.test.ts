import { createRedditClient, SortingMethod } from "../src"
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

test("Should get subreddit", async () => {
    const res = await client.getSubreddit({
        sortMethod: SortingMethod.Top,
        name: "news",
        sr_detail: true,
    })

    res.data.children[0].data.name
})

test("Should retrieve safe names", async () => {
    const res = await client.getSubredditNames({ query: "nsfw" })
    expect(res.names).not.toContain("nsfw")
})

test("Should retrieve adult names (change config)", async () => {
    client.config.setMatureContent(true)
    const res = await client.getSubredditNames({ query: "nsfw" })
    expect(res.names).toContain("nsfw")
})

test("Should retrieve adult names (init config)", async () => {
    client = createRedditClient({ clientId: secrets.clientId, secret: secrets.secret, matureContent: true })
    const res = await client.getSubredditNames({ query: "nsfw" })
    expect(res.names).toContain("nsfw")
})
