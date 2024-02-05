import { Kind } from "../Kind"
import { Url } from "../../tags/Url"
import { IFrame } from "../../tags/IFrame"
import { GetSubredditArgs } from "../requests/GetSubredditArgs"

export type GetSubredditResponse<TGetSubredditArgs extends GetSubredditArgs = GetSubredditArgs> = {
    kind: string
    data: {
        modash: string
        dist: number
        children: { kind: Kind; data: SubredditData<TGetSubredditArgs> }[]
        after: string | null
        before: string | null
    }
}

export type SubredditData<TGetSubredditArgs extends GetSubredditArgs = GetSubredditArgs> =
    TGetSubredditArgs["sr_detail"] extends true
        ? SubredditDataWithoutSubredditDetail<TGetSubredditArgs> & SubredditDataWithOnlySubredditDetail
        : SubredditDataWithoutSubredditDetail<TGetSubredditArgs>

type SubredditDataWithoutSubredditDetail<TGetSubredditArgs extends GetSubredditArgs> = {
    approved_at_utc: any
    subreddit: TGetSubredditArgs["name"] extends string
        ? TGetSubredditArgs["name"]
        : TGetSubredditArgs["name"] extends string[]
          ? TGetSubredditArgs["name"][number]
          : string
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
    media_embed: null | {
        content: IFrame
        width: number
        scrolling: boolean
        height: number
    }
    thumbnail_width: number
    author_flair_template_id: any
    is_original_content: boolean
    user_reports: any[]
    secure_media: null | {
        type: string
        oembed?: {
            provider_url: string
            version: string
            title: string
            type: string
            thumbnail_width: number
            height: number
            width: number
            html: IFrame
            author_name: string
            provider_name: string
            thumbnail_url: string
            thumbnail_height: number
            author_url: string
        }
        reddit_video?: {
            bitrate_kbps: number
            fallback_url: Url
            has_audio: boolean
            height: number
            width: number
            scrubber_media_url: string
            dash_url: string
            duration: number
            hls_url: string
            is_gif: false
            transcoding_status: string
        }
    }
    is_reddit_media_domain: boolean
    is_meta: boolean
    category: any
    secure_media_embed: null | {
        content: IFrame
        width: number
        scrolling: boolean
        media_domain_url: Url
        height: number
    }
    link_flair_text: string
    can_mod_post: boolean
    score: number
    approved_by: any
    is_created_from_ads_ui: boolean
    author_premium: boolean
    thumbnail: Url
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
    crosspost_parent_list?: SubredditData<TGetSubredditArgs>[]
    created: number
    link_flair_type: string
    wls: number
    removed_by_category: any
    banned_by: any
    author_flair_type: string
    domain: Url
    allow_live_comments: boolean
    selftext_html: any
    likes: any
    suggested_sort: any
    banned_at_utc: any
    url_overridden_by_dest: Url
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
                    url: Url
                    width: number
                    height: number
                }
                resolutions: {
                    url: Url
                    width: number
                    height: number
                }[]
                variants: {
                    obfuscated: {
                        source: {
                            url: Url
                            width: number
                            height: number
                        }
                        resolutions: {
                            url: Url
                            width: number
                            height: number
                        }[]
                    }
                    nsfw: {
                        source: {
                            url: Url
                            width: number
                            height: number
                        }
                        resolutions: {
                            url: Url
                            width: number
                            height: number
                        }[]
                    }
                }
                id: string
            },
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
    all_awardings: any[]
    awarders: any[]
    media_only: boolean
    can_gild: boolean
    spoiler: boolean
    locked: boolean
    author_flair_text: null
    treatment_tags: []
    visited: boolean
    removed_by: null
    num_reports: null
    distinguished: null
    subreddit_id: string
    mod_reason_by: null
    removal_reason: null
    link_flair_background_color: string
    id: string
    is_robot_indexable: boolean
    report_reasons: null
    author: string
    discussion_type: null
    num_comments: number
    send_replies: boolean
    whitelist_status: string
    contest_mode: boolean
    mod_reports: []
    author_patreon_flair: boolean
    crosspost_parent?: string
    author_flair_text_color: null
    permalink: string
    parent_whitelist_status: string
    stickied: boolean
    url: Url
    subreddit_subscribers: number
    created_utc: number
    num_crossposts: number
    media: null | {
        type: string
        oembed?: {
            provider_url: Url
            version: string
            title: string
            type: string
            thumbnail_width: number
            height: number
            width: number
            html: IFrame
            author_name: string
            provider_name: string
            thumbnail_url: Url
            thumbnail_height: number
            author_url: Url
        }
    }
    is_video: boolean
}

type SubredditDataWithOnlySubredditDetail = {
    sr_detail: {
        default_set: boolean
        banner_img: string
        restrict_posting: boolean
        user_is_banned?: any
        free_form_reports: boolean
        community_icon?: any
        show_media: boolean
        description: string
        user_is_muted?: any
        display_name: string
        header_img: string
        title: string
        previous_names: any[]
        user_is_moderator?: any
        over_18: boolean
        icon_size: number[]
        primary_color: string
        icon_img: string
        icon_color: string
        submit_link_label: string
        header_size: number[]
        restrict_commenting: boolean
        subscribers: number
        submit_text_label: string
        link_flair_position: string
        display_name_prefixed: string
        key_color: string
        name: string
        created: number
        url: string
        quarantine: boolean
        created_utc: number
        banner_size: number[]
        user_is_contributor?: any
        accept_followers: boolean
        public_description: string
        link_flair_enabled: boolean
        disable_contributor_requests: boolean
        subreddit_type: string
        user_is_subscriber?: any
    }
}
