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
