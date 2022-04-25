import { more } from "../helpers/more"
import { PostFilterCreator } from "../PostFilterCreator"

export const hasMoreThanNComments: PostFilterCreator<number> = more("num_comments")
