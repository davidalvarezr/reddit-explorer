import { urls } from "../constants/urls"

const { redditHost } = urls

export const buildLink = (permalink: string) => `${redditHost}${permalink}`
