import { parseRedditPost } from "../../src/media_parsers/reddit/parseRedditPost"
import { MediaType } from "../../src/media_parsers/MediaType"

const postContainingRedditImage = {
    approved_at_utc: null,
    subreddit: "nsfw",
    selftext: "",
    author_fullname: "t2_4dh6y8q3",
    saved: false,
    mod_reason_title: null,
    gilded: 0,
    clicked: false,
    title: "(F) Do you think your fist would fit?",
    link_flair_richtext: [],
    subreddit_name_prefixed: "r/nsfw",
    hidden: false,
    pwls: 0,
    link_flair_css_class: "green",
    downs: 0,
    thumbnail_height: 140,
    top_awarded_type: null,
    hide_score: false,
    name: "t3_u9efrg",
    quarantine: false,
    link_flair_text_color: "dark",
    upvote_ratio: 0.97,
    author_flair_background_color: null,
    ups: 21,
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
    link_flair_text: "Gape",
    can_mod_post: false,
    score: 21,
    approved_by: null,
    is_created_from_ads_ui: false,
    author_premium: false,
    thumbnail: "https://a.thumbs.redditmedia.com/ffqXFgjBnFBc-hz10N87qyQBsJQeWPfBM4LEvdmDiS4.jpg",
    edited: false,
    author_flair_css_class: null,
    author_flair_richtext: [],
    gildings: {},
    post_hint: "image",
    content_categories: null,
    is_self: false,
    subreddit_type: "public",
    created: 1650633355.0,
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
    url_overridden_by_dest: "https://i.redd.it/m7kc8akwy2v81.jpg",
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
                    url: "https://preview.redd.it/m7kc8akwy2v81.jpg?auto=webp&amp;s=bcbd30747150de890f29709fb203f5d377d5ca4a",
                    width: 3024,
                    height: 4032,
                },
                resolutions: [
                    {
                        url: "https://preview.redd.it/m7kc8akwy2v81.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=62be7e8d6a2a9414c8ccd9fed6a2171d8305bab0",
                        width: 108,
                        height: 144,
                    },
                    {
                        url: "https://preview.redd.it/m7kc8akwy2v81.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=0128e02f244cef5800f740297db401ed08f7501b",
                        width: 216,
                        height: 288,
                    },
                    {
                        url: "https://preview.redd.it/m7kc8akwy2v81.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=4f081b51ed272c89bda84861b6880ab3eabe2f07",
                        width: 320,
                        height: 426,
                    },
                    {
                        url: "https://preview.redd.it/m7kc8akwy2v81.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=501a9e95490722a3f6673494f93f61c2467bd3d0",
                        width: 640,
                        height: 853,
                    },
                    {
                        url: "https://preview.redd.it/m7kc8akwy2v81.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=68fa6bd366b7c53d325f1ce2fc705c7ab1cd6c0b",
                        width: 960,
                        height: 1280,
                    },
                    {
                        url: "https://preview.redd.it/m7kc8akwy2v81.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=ccca0cf4d5f2a5e950ded9e6d8764cc16710bc1c",
                        width: 1080,
                        height: 1440,
                    },
                ],
                variants: {
                    obfuscated: {
                        source: {
                            url: "https://preview.redd.it/m7kc8akwy2v81.jpg?blur=40&amp;format=pjpg&amp;auto=webp&amp;s=0ce17086f71381412606f49bcc9bdb9181e80ab7",
                            width: 3024,
                            height: 4032,
                        },
                        resolutions: [
                            {
                                url: "https://preview.redd.it/m7kc8akwy2v81.jpg?width=108&amp;crop=smart&amp;blur=10&amp;format=pjpg&amp;auto=webp&amp;s=fffc31eb3837cc992d6990daf3b858221a22b3f8",
                                width: 108,
                                height: 144,
                            },
                            {
                                url: "https://preview.redd.it/m7kc8akwy2v81.jpg?width=216&amp;crop=smart&amp;blur=21&amp;format=pjpg&amp;auto=webp&amp;s=6a4c53c46930f38763c5ad9d0db04f9a88f6f018",
                                width: 216,
                                height: 288,
                            },
                            {
                                url: "https://preview.redd.it/m7kc8akwy2v81.jpg?width=320&amp;crop=smart&amp;blur=32&amp;format=pjpg&amp;auto=webp&amp;s=b0b0474e912d83805a7c27c32330bccbc92469b2",
                                width: 320,
                                height: 426,
                            },
                            {
                                url: "https://preview.redd.it/m7kc8akwy2v81.jpg?width=640&amp;crop=smart&amp;blur=40&amp;format=pjpg&amp;auto=webp&amp;s=f542d7aecb32bb1a07afe914556698ca0467cd31",
                                width: 640,
                                height: 853,
                            },
                            {
                                url: "https://preview.redd.it/m7kc8akwy2v81.jpg?width=960&amp;crop=smart&amp;blur=40&amp;format=pjpg&amp;auto=webp&amp;s=dc896f68d60c0f5234295c369e6db3f7435a0273",
                                width: 960,
                                height: 1280,
                            },
                            {
                                url: "https://preview.redd.it/m7kc8akwy2v81.jpg?width=1080&amp;crop=smart&amp;blur=40&amp;format=pjpg&amp;auto=webp&amp;s=395ced7c6daad50e9d4a41bf13b8dd8b0d895c2d",
                                width: 1080,
                                height: 1440,
                            },
                        ],
                    },
                    nsfw: {
                        source: {
                            url: "https://preview.redd.it/m7kc8akwy2v81.jpg?blur=40&amp;format=pjpg&amp;auto=webp&amp;s=0ce17086f71381412606f49bcc9bdb9181e80ab7",
                            width: 3024,
                            height: 4032,
                        },
                        resolutions: [
                            {
                                url: "https://preview.redd.it/m7kc8akwy2v81.jpg?width=108&amp;crop=smart&amp;blur=10&amp;format=pjpg&amp;auto=webp&amp;s=fffc31eb3837cc992d6990daf3b858221a22b3f8",
                                width: 108,
                                height: 144,
                            },
                            {
                                url: "https://preview.redd.it/m7kc8akwy2v81.jpg?width=216&amp;crop=smart&amp;blur=21&amp;format=pjpg&amp;auto=webp&amp;s=6a4c53c46930f38763c5ad9d0db04f9a88f6f018",
                                width: 216,
                                height: 288,
                            },
                            {
                                url: "https://preview.redd.it/m7kc8akwy2v81.jpg?width=320&amp;crop=smart&amp;blur=32&amp;format=pjpg&amp;auto=webp&amp;s=b0b0474e912d83805a7c27c32330bccbc92469b2",
                                width: 320,
                                height: 426,
                            },
                            {
                                url: "https://preview.redd.it/m7kc8akwy2v81.jpg?width=640&amp;crop=smart&amp;blur=40&amp;format=pjpg&amp;auto=webp&amp;s=f542d7aecb32bb1a07afe914556698ca0467cd31",
                                width: 640,
                                height: 853,
                            },
                            {
                                url: "https://preview.redd.it/m7kc8akwy2v81.jpg?width=960&amp;crop=smart&amp;blur=40&amp;format=pjpg&amp;auto=webp&amp;s=dc896f68d60c0f5234295c369e6db3f7435a0273",
                                width: 960,
                                height: 1280,
                            },
                            {
                                url: "https://preview.redd.it/m7kc8akwy2v81.jpg?width=1080&amp;crop=smart&amp;blur=40&amp;format=pjpg&amp;auto=webp&amp;s=395ced7c6daad50e9d4a41bf13b8dd8b0d895c2d",
                                width: 1080,
                                height: 1440,
                            },
                        ],
                    },
                },
                id: "fGljyt2NCPRabhdhQIlc6tTQUb95WTYCbVyWVxm9V5U",
            },
        ],
        enabled: true,
    },
    all_awardings: [],
    awarders: [],
    media_only: false,
    link_flair_template_id: "64b329b6-b7aa-11e5-9323-0e0e7b9568f7",
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
    id: "u9efrg",
    is_robot_indexable: true,
    report_reasons: null,
    author: "LanaWide",
    discussion_type: null,
    num_comments: 1,
    send_replies: true,
    whitelist_status: "no_ads",
    contest_mode: false,
    mod_reports: [],
    author_patreon_flair: false,
    author_flair_text_color: null,
    permalink: "/r/nsfw/comments/u9efrg/f_do_you_think_your_fist_would_fit/",
    parent_whitelist_status: "no_ads",
    stickied: false,
    url: "https://i.redd.it/m7kc8akwy2v81.jpg",
    subreddit_subscribers: 377091,
    created_utc: 1650633355.0,
    num_crossposts: 0,
    media: null,
    is_video: false,
}

const parser = parseRedditPost(postContainingRedditImage as any)

test("Should get thumbnail", () => {
    const thumbnail = parser.getThumbnail()
    expect(thumbnail).toEqual(postContainingRedditImage.thumbnail)
})

test("Should get media", () => {
    const media = parser.getMedia()
    expect(media).toEqual(postContainingRedditImage.url)
})

test("Media should be gif", () => {
    const media = parser.getMediaType()
    expect(media).toEqual(MediaType.Image)
})
