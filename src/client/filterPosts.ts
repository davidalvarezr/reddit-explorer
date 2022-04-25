import { GetSubredditResponse } from "../types/api/responses/GetSubredditResponse"
import { PostFilter } from "../post_filters/PostFilter"
import { GetSubredditArgs } from "../types/api/requests/GetSubredditArgs"

export const filterPosts = <TGetSubredditArgs extends GetSubredditArgs>(
    getSubredditResponse: GetSubredditResponse<TGetSubredditArgs>,
    postFilters: PostFilter[] | undefined
): GetSubredditResponse<TGetSubredditArgs> => {
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
