import { GetSubredditResponse } from "../types/api/responses/GetSubredditResponse"
import { PostFilter } from "../post_filter/PostFilter"

export const filterPosts = (
    getSubredditResponse: GetSubredditResponse,
    postFilters: PostFilter[] | undefined
): GetSubredditResponse => {
    if (!postFilters) {
        return getSubredditResponse
    }

    return {
        ...getSubredditResponse,
        data: {
            ...getSubredditResponse.data,
            children: getSubredditResponse.data.children.filter((subredditData) => {
                for (const postFilter of postFilters) {
                    if (!postFilter(subredditData.data)) {
                        return false
                    }
                }

                return true
            }),
        },
    }
}
