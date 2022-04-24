import { createRedditClient, SortingMethod } from "../src"
import { secrets } from "../src/config/secrets"
import { RedditClient } from "../src/types/RedditClient"

let client: RedditClient

beforeAll(() => {
    client = createRedditClient({ clientId: secrets.clientId, secret: secrets.secret })
})

test("Make sure two subsequent call to subredditIterator.next() get 2 different pages", async () => {
    const memeSubredditIterator = client.getSubredditIterator({
        sortMethod: SortingMethod.Top,
        name: "meme",
    })

    const firstPage = await memeSubredditIterator.next()
    const secondPage = await memeSubredditIterator.next()

    expect(firstPage.value.data.after).not.toEqual(secondPage.value.data.after)
})

test("Two pages of size 5 must have same content that one page of size 10", async () => {
    const memeSubreddit0To9 = await client.getSubreddit({
        sortMethod: SortingMethod.Top,
        name: "meme",
        limit: 10,
    })

    const memeSubredditIterator = client.getSubredditIterator({
        sortMethod: SortingMethod.Top,
        name: "meme",
        limit: 5,
    })

    const memeSubreddit0To4 = (await memeSubredditIterator.next()).value
    const memeSubreddit5To9 = (await memeSubredditIterator.next()).value

    const memeSubreddit0To9Ids = memeSubreddit0To9.data.children.map((post) => post.data.name)
    const mergedPostIds = [...memeSubreddit0To4.data.children, ...memeSubreddit5To9.data.children].map(
        (post) => post.data.name
    )

    expect(JSON.stringify(memeSubreddit0To9Ids)).toEqual(JSON.stringify(mergedPostIds))
})
