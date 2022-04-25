import { sameOrMore } from "../helpers/sameOrMore"
import { PostFilterCreator } from "../PostFilterCreator"

export const hasMoreOrSameThanNComments: PostFilterCreator<number> = sameOrMore("num_comments")
