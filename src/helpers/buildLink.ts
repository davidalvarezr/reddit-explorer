import { Url } from "../constants/Url"

export const buildLink = (permalink: string) => `${Url.RedditHost}${permalink}`
