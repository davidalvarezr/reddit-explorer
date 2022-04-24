import { createRedditClient } from "../src"
import { secrets } from "../src/secrets"
import { RedditClient } from "../src/types/RedditClient"

let client: RedditClient

beforeAll(() => {
    client = createRedditClient({ clientId: secrets.clientId, secret: secrets.secret })
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
