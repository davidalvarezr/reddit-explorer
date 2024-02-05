import { createRedditClient } from "../src"
import { secrets } from "../src/config/secrets"
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

// TODO: mock and check what is given to request instead of testing response
test("Mature content should override config limit", async () => {
    client = createRedditClient({ clientId: secrets.clientId, secret: secrets.secret, matureContent: false })
    const res = await client.getSubredditNames({ query: "nsfw" })
    expect(res.names).not.toContain("nsfw")

    client = createRedditClient({ clientId: secrets.clientId, secret: secrets.secret, matureContent: false })
    const res2 = await client.getSubredditNames({ query: "nsfw", include_over_18: true })
    expect(res2.names).toContain("nsfw")
})
