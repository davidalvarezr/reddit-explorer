import { Kind } from "../Kind"
import { Thumbnail } from "../../tags/Thumbnail"
import { Domain } from "../../tags/Domain"
import { PreviewUrl } from "../../tags/PreviewUrl"
import { MediaUrl } from "../../tags/MediaUrl"

export type GetSubreddit = {
    kind: string
    data: {
        modash: string
        dist: number
        children: {
            kind: Kind
            data: {
                approved_at_utc: any
                subreddit: string
                selftext: string
                author_fullname: string
                saved: boolean
                mod_reason_title: any
                gilded: number
                clicked: boolean
                title: string
                link_flair_richtext: any[]
                subreddit_name_prefixed: string
                hidden: boolean
                pwls: number
                link_flair_css_class: any
                downs: number
                thumbnail_height: number
                top_awarded_type: any
                hide_score: boolean
                name: string
                quarantine: boolean
                link_flair_text_color: string
                upvote_ratio: number
                author_flair_background_color: any
                subreddit_type: string
                ups: number
                total_awards_received: number
                media_embed: any
                thumbnail_width: number
                author_flair_template_id: any
                is_original_content: boolean
                user_reports: any[]
                secure_media: any
                is_reddit_media_domain: boolean
                is_meta: boolean
                category: any
                secure_media_embed: any
                link_flair_text: string
                can_mod_post: boolean
                score: number
                approved_by: any
                is_created_from_ads_ui: boolean
                author_premium: boolean
                thumbnail: Thumbnail
                edited: boolean
                author_flair_css_class: any
                author_flair_richtext: any[]
                gildings: {
                    gid_1: number
                }
                post_hint: string
                content_categories: any
                is_self: boolean
                mod_note: any
                created: number
                link_flair_type: string
                wls: number
                removed_by_category: any
                banned_by: any
                author_flair_type: string
                domain: Domain
                allow_live_comments: boolean
                selftext_html: any
                likes: any
                suggested_sort: any
                banned_at_utc: any
                url_overridden_by_dest: Thumbnail
                view_count: any
                archived: boolean
                no_follow: boolean
                is_crosspostable: boolean
                pinned: boolean
                over_18: boolean
                preview: {
                    images: [
                        {
                            source: {
                                url: PreviewUrl
                                width: number
                                height: number
                            }
                            resolutions: {
                                url: PreviewUrl
                                width: number
                                height: number
                            }[]
                            variants: {
                                obfuscated: {
                                    source: {
                                        url: PreviewUrl
                                        width: number
                                        height: number
                                    }
                                    resolutions: {
                                        url: PreviewUrl
                                        width: number
                                        height: number
                                    }[]
                                }
                                nsfw: {
                                    source: {
                                        url: PreviewUrl
                                        width: number
                                        height: number
                                    }
                                    resolutions: {
                                        url: PreviewUrl
                                        width: number
                                        height: number
                                    }[]
                                }
                            }
                            id: string
                        }
                    ]
                    reddit_video_preview: {
                        bitrate_kbps: number
                        fallback_url: string
                        height: number
                        width: number
                        scrubber_media_url: string
                        dash_url: string
                        duration: number
                        hls_url: string
                        is_gif: boolean
                        transcoding_status: string
                    }
                    enabled: boolean
                }
                // todo: all awardings
                // todo: sr_detail
                // todo: rest
                permalink: string
                url: MediaUrl
                media: any
                is_video: boolean
            }
        }[]
        after: string | null
        before: string | null
    }
}
