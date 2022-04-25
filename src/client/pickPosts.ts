import { GetSubredditResponse, SubredditData } from "../types/api/responses/GetSubredditResponse"
import { GetSubredditArgs } from "../types/api/requests/GetSubredditArgs"

export const pickPosts = <
    TGetSubredditArgs extends GetSubredditArgs,
    TPostPicker extends (subredditData: SubredditData<TGetSubredditArgs>) => Partial<SubredditData<TGetSubredditArgs>>
>(
    getSubredditResponse: GetSubredditResponse<TGetSubredditArgs>,
    postPickers: TPostPicker[] | undefined
): GetSubredditResponse<TGetSubredditArgs> => {
    if (!postPickers) {
        return getSubredditResponse
    }

    return {
        ...getSubredditResponse,
        data: {
            ...getSubredditResponse.data,
            children: getSubredditResponse.data.children.map((subredditData) => {
                return subredditData
            }),
        },
    }
}
