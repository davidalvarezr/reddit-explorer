import { PostPicker } from "./PostPicker"

export const titleAndUrl: PostPicker = (subredditData) => ({
    title: subredditData.title,
    url: subredditData.url,
})
