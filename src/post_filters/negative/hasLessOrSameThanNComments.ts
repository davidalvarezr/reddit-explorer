import { sameOrLess } from "../helpers/sameOrLess"
import { PostFilterCreator } from "../PostFilterCreator"

export const hasLessOrSameThanNComments: PostFilterCreator<number> = sameOrLess("num_comments")
