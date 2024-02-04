import { createRedditSimpleClient } from "../src"
import { secrets } from "../src/config/secrets"
import { RedditSimpleClient } from "../src/types/api/reddit-simple-client/RedditSimpleClient.js"

let simpleClient: RedditSimpleClient

beforeAll(() => {
    simpleClient = createRedditSimpleClient({ clientId: secrets.clientId, secret: secrets.secret })
})

test("Should retrieve safe names", async () => {
    const res = await simpleClient.getSubredditNames({ query: "nsfw" })
    expect(res.names).not.toContain("nsfw")
})

// TODO: allow to update config from simpleClient ?
// test("Should retrieve adult names (change config)", async () => {
//     simpleClient.config.setMatureContent(true)
//     const res = await simpleClient.getSubredditNames({ query: "nsfw" })
//     expect(res.names).toContain("nsfw")
// })

test("Should retrieve adult names (init config)", async () => {
    simpleClient = createRedditSimpleClient({ clientId: secrets.clientId, secret: secrets.secret, matureContent: true })
    const res = await simpleClient.getSubredditNames({ query: "nsfw" })
    expect(res.names).toContain("nsfw")
})
