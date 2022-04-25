import { PostFilterCreator } from "../PostFilterCreator"
import { same } from "../helpers/same"

export const hasNComments: PostFilterCreator<number> = same("num_comments")
