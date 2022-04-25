import { PostFilter } from "../PostFilter"
import { isFalse } from "../helpers/isFalse"

export const isNotMatureContent: PostFilter = isFalse("over_18")
