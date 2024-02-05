import { createRedditClient, SortingMethod } from "../src"
import { secrets } from "../src/config/secrets"
import { RedditClient } from "../src/types/RedditClient"

let client: RedditClient

beforeAll(() => {
    client = createRedditClient({ clientId: secrets.clientId, secret: secrets.secret })
})

test("Should get subreddit with sr_detail", async () => {
    const res = await client.getSubreddit({
        sortMethod: SortingMethod.Top,
        name: "news",
        sr_detail: true,
    })

    expect(Object.keys(res.data.children[0].data)).toContain("sr_detail")
})

test("Should get subreddit without sr_detail", async () => {
    const res = await client.getSubreddit({
        sortMethod: SortingMethod.Top,
        name: "news",
    })

    expect(Object.keys(res.data.children[0].data)).not.toContain("sr_detail")
})

test("Should get multiple subreddits", async () => {
    const res = await client.getSubreddit({
        sortMethod: SortingMethod.Top,
        name: ["news", "meme"],
    })

    const subredditNamesMap = res.data.children.map((post) => post.data.subreddit)

    expect(subredditNamesMap).toContain("news")
    expect(subredditNamesMap).toContain("meme")
})

// TODO: mock and check what is given to request instead of testing response
test("Limit should override config limit", async () => {
    client = createRedditClient({ clientId: secrets.clientId, secret: secrets.secret, limit: 5 })
    const res = await client.getSubreddit({
        sortMethod: SortingMethod.Top,
        name: ["news", "meme"],
    })
    expect(res.data.children).toHaveLength(5)

    client = createRedditClient({ clientId: secrets.clientId, secret: secrets.secret, limit: 5 })
    const res2 = await client.getSubreddit({
        sortMethod: SortingMethod.Top,
        name: ["news", "meme"],
        limit: 10,
    })
    expect(res2.data.children).toHaveLength(10)
})
