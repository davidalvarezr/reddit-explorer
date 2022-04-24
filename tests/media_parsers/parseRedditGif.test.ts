import { parseRedditPost } from "../../src/media_parsers/reddit/parseRedditPost"
import { MediaType } from "../../src/media_parsers/MediaType"

const postContainingRedditGif = {
    approved_at_utc: null,
    subreddit: "nsfw",
    selftext: "",
    author_fullname: "t2_hlrv3cfc",
    saved: false,
    mod_reason_title: null,
    gilded: 0,
    clicked: false,
    title: "Getting my tight ass used to getting fucked 🍑💦",
    link_flair_richtext: [],
    subreddit_name_prefixed: "r/nsfw",
    hidden: false,
    pwls: 0,
    link_flair_css_class: "blue",
    downs: 0,
    thumbnail_height: 82,
    top_awarded_type: null,
    hide_score: false,
    name: "t3_u9cmio",
    quarantine: false,
    link_flair_text_color: "dark",
    upvote_ratio: 0.99,
    author_flair_background_color: null,
    ups: 507,
    total_awards_received: 0,
    media_embed: {},
    thumbnail_width: 140,
    author_flair_template_id: null,
    is_original_content: false,
    user_reports: [],
    secure_media: null,
    is_reddit_media_domain: true,
    is_meta: false,
    category: null,
    secure_media_embed: {},
    link_flair_text: "Toys",
    can_mod_post: false,
    score: 507,
    approved_by: null,
    is_created_from_ads_ui: false,
    author_premium: false,
    thumbnail: "https://b.thumbs.redditmedia.com/EzUcR0Inbj0oRvE3a0scWo3uoqadTw7abb_6Is5AuBw.jpg",
    edited: false,
    author_flair_css_class: null,
    author_flair_richtext: [],
    gildings: {},
    post_hint: "image",
    content_categories: null,
    is_self: false,
    subreddit_type: "public",
    created: 1650627658.0,
    link_flair_type: "text",
    wls: 0,
    removed_by_category: null,
    banned_by: null,
    author_flair_type: "text",
    domain: "i.redd.it",
    allow_live_comments: false,
    selftext_html: null,
    likes: null,
    suggested_sort: null,
    banned_at_utc: null,
    url_overridden_by_dest: "https://i.redd.it/2e5ra8ayh2v81.gif",
    view_count: null,
    archived: false,
    no_follow: false,
    is_crosspostable: false,
    pinned: false,
    over_18: true,
    preview: {
        images: [
            {
                source: {
                    url: "https://preview.redd.it/2e5ra8ayh2v81.gif?format=png8&amp;s=50c6b04fc09429b340bd3068f2b81fbd644d4826",
                    width: 600,
                    height: 354,
                },
                resolutions: [
                    {
                        url: "https://preview.redd.it/2e5ra8ayh2v81.gif?width=108&amp;crop=smart&amp;format=png8&amp;s=f51b61646fdf21370e495e3b7a171e03639a47d0",
                        width: 108,
                        height: 63,
                    },
                    {
                        url: "https://preview.redd.it/2e5ra8ayh2v81.gif?width=216&amp;crop=smart&amp;format=png8&amp;s=818c9f8ee7a34d9be54381df4e9e30754c3c9764",
                        width: 216,
                        height: 127,
                    },
                    {
                        url: "https://preview.redd.it/2e5ra8ayh2v81.gif?width=320&amp;crop=smart&amp;format=png8&amp;s=8993da6a2f2c4599d92473e59cf600895bf95818",
                        width: 320,
                        height: 188,
                    },
                ],
                variants: {
                    obfuscated: {
                        source: {
                            url: "https://preview.redd.it/2e5ra8ayh2v81.gif?blur=40&amp;format=png8&amp;s=f271997013481a68edc5e7bec192279ba263c12e",
                            width: 600,
                            height: 354,
                        },
                        resolutions: [
                            {
                                url: "https://preview.redd.it/2e5ra8ayh2v81.gif?width=108&amp;crop=smart&amp;blur=10&amp;format=png8&amp;s=1a3e43056028af7b648e4c309c784f7076bb6c68",
                                width: 108,
                                height: 63,
                            },
                            {
                                url: "https://preview.redd.it/2e5ra8ayh2v81.gif?width=216&amp;crop=smart&amp;blur=21&amp;format=png8&amp;s=580d65440864c80cfb0ff618e21b8f3d02e50480",
                                width: 216,
                                height: 127,
                            },
                            {
                                url: "https://preview.redd.it/2e5ra8ayh2v81.gif?width=320&amp;crop=smart&amp;blur=32&amp;format=png8&amp;s=13c70d5cf60b21be21d2f3dca0484dfb66d77ebf",
                                width: 320,
                                height: 188,
                            },
                        ],
                    },
                    gif: {
                        source: {
                            url: "https://preview.redd.it/2e5ra8ayh2v81.gif?s=aec779e3d686f5e0e89dd23482f0e0b9f3200d72",
                            width: 600,
                            height: 354,
                        },
                        resolutions: [
                            {
                                url: "https://preview.redd.it/2e5ra8ayh2v81.gif?width=108&amp;crop=smart&amp;s=c023026759d25f0aa572e03e358ac90640a31660",
                                width: 108,
                                height: 63,
                            },
                            {
                                url: "https://preview.redd.it/2e5ra8ayh2v81.gif?width=216&amp;crop=smart&amp;s=7536b202f63288e8429e6d4a5d452368bb0ebe9b",
                                width: 216,
                                height: 127,
                            },
                            {
                                url: "https://preview.redd.it/2e5ra8ayh2v81.gif?width=320&amp;crop=smart&amp;s=5dc4d1a50f4dced18334f88ed76bf46b59d025ed",
                                width: 320,
                                height: 188,
                            },
                        ],
                    },
                    mp4: {
                        source: {
                            url: "https://preview.redd.it/2e5ra8ayh2v81.gif?format=mp4&amp;s=6d771426b91bfb141912a80c9318c1c5ca5a6fe8",
                            width: 600,
                            height: 354,
                        },
                        resolutions: [
                            {
                                url: "https://preview.redd.it/2e5ra8ayh2v81.gif?width=108&amp;format=mp4&amp;s=b7cfca54432a8daa64afd09a495ff03babcbf25b",
                                width: 108,
                                height: 63,
                            },
                            {
                                url: "https://preview.redd.it/2e5ra8ayh2v81.gif?width=216&amp;format=mp4&amp;s=3034e2d0d9784698d8b8351f8e70add72b3e213e",
                                width: 216,
                                height: 127,
                            },
                            {
                                url: "https://preview.redd.it/2e5ra8ayh2v81.gif?width=320&amp;format=mp4&amp;s=30f0fb5437bbf02d6d1aac543cc753f2e97dadad",
                                width: 320,
                                height: 188,
                            },
                        ],
                    },
                    nsfw: {
                        source: {
                            url: "https://preview.redd.it/2e5ra8ayh2v81.gif?blur=40&amp;format=png8&amp;s=f271997013481a68edc5e7bec192279ba263c12e",
                            width: 600,
                            height: 354,
                        },
                        resolutions: [
                            {
                                url: "https://preview.redd.it/2e5ra8ayh2v81.gif?width=108&amp;crop=smart&amp;blur=10&amp;format=png8&amp;s=1a3e43056028af7b648e4c309c784f7076bb6c68",
                                width: 108,
                                height: 63,
                            },
                            {
                                url: "https://preview.redd.it/2e5ra8ayh2v81.gif?width=216&amp;crop=smart&amp;blur=21&amp;format=png8&amp;s=580d65440864c80cfb0ff618e21b8f3d02e50480",
                                width: 216,
                                height: 127,
                            },
                            {
                                url: "https://preview.redd.it/2e5ra8ayh2v81.gif?width=320&amp;crop=smart&amp;blur=32&amp;format=png8&amp;s=13c70d5cf60b21be21d2f3dca0484dfb66d77ebf",
                                width: 320,
                                height: 188,
                            },
                        ],
                    },
                },
                id: "WWKVTho1VlkM7YBEpBQZTXgd77Gl7pLRo6gq3rHxMRE",
            },
        ],
        enabled: true,
    },
    all_awardings: [],
    awarders: [],
    media_only: false,
    link_flair_template_id: "6db3ae50-b7aa-11e5-b9a4-0e21cae40d85",
    can_gild: false,
    spoiler: false,
    locked: false,
    author_flair_text: null,
    treatment_tags: [],
    visited: false,
    removed_by: null,
    mod_note: null,
    distinguished: null,
    subreddit_id: "t5_2z3hs",
    author_is_blocked: false,
    mod_reason_by: null,
    num_reports: null,
    removal_reason: null,
    link_flair_background_color: "",
    id: "u9cmio",
    is_robot_indexable: true,
    report_reasons: null,
    author: "Creamdreamzzz69",
    discussion_type: null,
    num_comments: 7,
    send_replies: false,
    whitelist_status: "no_ads",
    contest_mode: false,
    mod_reports: [],
    author_patreon_flair: false,
    author_flair_text_color: null,
    permalink: "/r/nsfw/comments/u9cmio/getting_my_tight_ass_used_to_getting_fucked/",
    parent_whitelist_status: "no_ads",
    stickied: false,
    url: "https://i.redd.it/2e5ra8ayh2v81.gif",
    subreddit_subscribers: 377091,
    created_utc: 1650627658.0,
    num_crossposts: 0,
    media: null,
    is_video: false,
}

const parser = parseRedditPost(postContainingRedditGif as any)

test("Should get thumbnail", () => {
    const thumbnail = parser.getThumbnail()
    expect(thumbnail).toEqual(postContainingRedditGif.thumbnail)
})

test("Should get media", () => {
    const media = parser.getMedia()
    expect(media).toEqual(postContainingRedditGif.url)
})

test("Media should be gif", () => {
    const media = parser.getMediaType()
    expect(media).toEqual(MediaType.Gif)
})
