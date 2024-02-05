import { SimplePost } from "../requests/SimpleGetSubredditArgs"

export type SimpleGetSubredditResponse = {
    before: string | null
    after: string | null
    data: SimplePost[]
}
