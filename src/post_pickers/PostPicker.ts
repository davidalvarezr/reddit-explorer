import { SubredditData } from "../types/api/responses/GetSubredditResponse"
import { GetSubredditArgs } from "../types/api/requests/GetSubredditArgs"

// Pick<SubredditData, SubredditData[keyof SubredditData]>

export type PostPicker = <TGetSubredditArgs extends GetSubredditArgs>(
    subredditData: SubredditData<TGetSubredditArgs>
) => Partial<SubredditData<TGetSubredditArgs>>
