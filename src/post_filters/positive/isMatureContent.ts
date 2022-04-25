import { PostFilter } from "../PostFilter"
import { isTrue } from "../helpers/isTrue"

export const isMatureContent: PostFilter = isTrue("over_18")
