import { more } from "../helpers/more"
import { PostFilterCreator } from "../PostFilterCreator"

export const hasMoreThanNCrossposts: PostFilterCreator<number> = more("num_crossposts")
