import { SimpleGetSubredditArgs, SimplePost } from "../requests/SimpleGetSubredditArgs.js"

export type SimpleGetSubredditResponse<T extends SimpleGetSubredditArgs> = {
    before: string | null
    after: string | null
    // TODO: figure out why this type is not working properly
    // data: T["fields"]["length"] extends 0 ? SimplePost[] : Pick<SimplePost, T["fields"][number]>[]
    data: SimplePost[]
}
