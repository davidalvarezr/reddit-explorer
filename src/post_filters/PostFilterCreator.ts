import { PostFilter } from "./PostFilter"

export type PostFilterCreator<TVal> = (val: TVal) => PostFilter
