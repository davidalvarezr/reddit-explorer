import { createRedditSimpleClient, SortingMethod } from "../src"
import { secrets } from "../src/config/secrets"
import { RedditSimpleClient } from "../src/types/api/reddit-simple-client/RedditSimpleClient.js"

let simpleClient: RedditSimpleClient

beforeAll(() => {
    simpleClient = createRedditSimpleClient({ clientId: secrets.clientId, secret: secrets.secret })
})

test("Should get subreddit without sr_detail", async () => {
    const res = await simpleClient.getSubreddit({
        sortMethod: SortingMethod.Top,
        name: "news",
    })

    expect(Object.keys(res.data[0])).not.toContain("sr_detail")
})

test("Should get multiple subreddits", async () => {
    const res = await simpleClient.getSubreddit({
        sortMethod: SortingMethod.Top,
        name: ["news", "meme"],
    })

    const subredditNamesMap = res.data.map((post) => post.subreddit)

    expect(subredditNamesMap).toContain("news")
    expect(subredditNamesMap).toContain("meme")
})

test("Shape of a post should contains all the keys", async () => {
    const res = await simpleClient.getSubreddit({
        sortMethod: SortingMethod.Top,
        name: "news",
    })

    expect(Object.keys(res.data[0]).length).toBe(9)
    expect(res.data[0]).toHaveProperty("kind")
    expect(res.data[0]).toHaveProperty("title")
    expect(res.data[0]).toHaveProperty("url")
    expect(res.data[0]).toHaveProperty("subreddit")
    expect(res.data[0]).toHaveProperty("thumbnail")
    expect(res.data[0]).toHaveProperty("permalink")
    expect(res.data[0]).toHaveProperty("link")
    expect(res.data[0]).toHaveProperty("createdAtUtc")
    expect(res.data[0]).toHaveProperty("createdAtLocal")
})

test("Shape of a post should contains only the mentioned keys", async () => {
    const res = await simpleClient.getSubreddit({
        sortMethod: SortingMethod.Top,
        name: "news",
        fields: ["title", "subreddit"],
    })

    expect(Object.keys(res.data[0]).length).toBe(2)
    expect(res.data[0]).toHaveProperty("title")
    expect(res.data[0]).toHaveProperty("subreddit")
    expect(res.data[0]).not.toHaveProperty("link")
})
