import { Extension } from "../../src/media_parsers/Extension"
import { parseImgurPost } from "../../src/media_parsers/imgur/parseImgurPost"
import { MediaType } from "../../src/media_parsers/MediaType"

const postContainingImgurMedia = {
    approved_at_utc: null,
    subreddit: "MasterOfAnal",
    selftext: "",
    author_fullname: "t2_dmjefaxp",
    saved: false,
    mod_reason_title: null,
    gilded: 0,
    clicked: false,
    title: "Enjoy the view :)",
    link_flair_richtext: [],
    subreddit_name_prefixed: "r/MasterOfAnal",
    hidden: false,
    pwls: 0,
    link_flair_css_class: null,
    downs: 0,
    thumbnail_height: 140,
    top_awarded_type: null,
    hide_score: false,
    name: "t3_u9eqnv",
    quarantine: false,
    link_flair_text_color: "dark",
    upvote_ratio: 1.0,
    author_flair_background_color: null,
    subreddit_type: "public",
    ups: 17,
    total_awards_received: 0,
    media_embed: {},
    thumbnail_width: 140,
    author_flair_template_id: null,
    is_original_content: false,
    user_reports: [],
    secure_media: null,
    is_reddit_media_domain: false,
    is_meta: false,
    category: null,
    secure_media_embed: {},
    link_flair_text: null,
    can_mod_post: false,
    score: 17,
    approved_by: null,
    is_created_from_ads_ui: false,
    author_premium: false,
    thumbnail: "https://b.thumbs.redditmedia.com/mVdRY3v8i1nU7NMKK69tzGaEDQRgtMKULfrZPbt-rEE.jpg",
    edited: false,
    author_flair_css_class: null,
    author_flair_richtext: [],
    gildings: {},
    post_hint: "image",
    content_categories: null,
    is_self: false,
    mod_note: null,
    created: 1650634240.0,
    link_flair_type: "text",
    wls: 0,
    removed_by_category: null,
    banned_by: null,
    author_flair_type: "text",
    domain: "i.imgur.com",
    allow_live_comments: false,
    selftext_html: null,
    likes: null,
    suggested_sort: null,
    banned_at_utc: null,
    url_overridden_by_dest: "https://i.imgur.com/LkGThfh.jpg",
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
                    url: "https://external-preview.redd.it/gHIFn17OYbnmbN7TOd4mCicxmUSv7TL366lDblVRaC4.jpg?auto=webp&amp;s=ea6cfccd059e7baec16032e6a332be97952796cf",
                    width: 960,
                    height: 1280,
                },
                resolutions: [
                    {
                        url: "https://external-preview.redd.it/gHIFn17OYbnmbN7TOd4mCicxmUSv7TL366lDblVRaC4.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=effa813107b62b1e0a0d1fb427fd8031c105902f",
                        width: 108,
                        height: 144,
                    },
                    {
                        url: "https://external-preview.redd.it/gHIFn17OYbnmbN7TOd4mCicxmUSv7TL366lDblVRaC4.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=17494b3f8611f1a768bb2f0d47499d629a2694bb",
                        width: 216,
                        height: 288,
                    },
                    {
                        url: "https://external-preview.redd.it/gHIFn17OYbnmbN7TOd4mCicxmUSv7TL366lDblVRaC4.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=48eb1907e9b1b25b1ca35cda2a1db2963b545f39",
                        width: 320,
                        height: 426,
                    },
                    {
                        url: "https://external-preview.redd.it/gHIFn17OYbnmbN7TOd4mCicxmUSv7TL366lDblVRaC4.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=5922b8bf8fd65ba7c4be641edcce822d25d31254",
                        width: 640,
                        height: 853,
                    },
                    {
                        url: "https://external-preview.redd.it/gHIFn17OYbnmbN7TOd4mCicxmUSv7TL366lDblVRaC4.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=ab927df2fddbddd454b203a12d2bc2b89056a19c",
                        width: 960,
                        height: 1280,
                    },
                ],
                variants: {
                    obfuscated: {
                        source: {
                            url: "https://external-preview.redd.it/gHIFn17OYbnmbN7TOd4mCicxmUSv7TL366lDblVRaC4.jpg?blur=40&amp;format=pjpg&amp;auto=webp&amp;s=24f64a6f75a03dc54f800451ac6d5722567db5f3",
                            width: 960,
                            height: 1280,
                        },
                        resolutions: [
                            {
                                url: "https://external-preview.redd.it/gHIFn17OYbnmbN7TOd4mCicxmUSv7TL366lDblVRaC4.jpg?width=108&amp;crop=smart&amp;blur=10&amp;format=pjpg&amp;auto=webp&amp;s=85e7e3b534fe117f0fd79527df62fa9145c0b747",
                                width: 108,
                                height: 144,
                            },
                            {
                                url: "https://external-preview.redd.it/gHIFn17OYbnmbN7TOd4mCicxmUSv7TL366lDblVRaC4.jpg?width=216&amp;crop=smart&amp;blur=21&amp;format=pjpg&amp;auto=webp&amp;s=2a6444e483c405e9135284b6ca82a2fb454fa9f1",
                                width: 216,
                                height: 288,
                            },
                            {
                                url: "https://external-preview.redd.it/gHIFn17OYbnmbN7TOd4mCicxmUSv7TL366lDblVRaC4.jpg?width=320&amp;crop=smart&amp;blur=32&amp;format=pjpg&amp;auto=webp&amp;s=aef5acb25c555a89cb0d2da708a45f7b9308760d",
                                width: 320,
                                height: 426,
                            },
                            {
                                url: "https://external-preview.redd.it/gHIFn17OYbnmbN7TOd4mCicxmUSv7TL366lDblVRaC4.jpg?width=640&amp;crop=smart&amp;blur=40&amp;format=pjpg&amp;auto=webp&amp;s=be804f73f6f20ef6f2d98b9feec3029b3f99f132",
                                width: 640,
                                height: 853,
                            },
                            {
                                url: "https://external-preview.redd.it/gHIFn17OYbnmbN7TOd4mCicxmUSv7TL366lDblVRaC4.jpg?width=960&amp;crop=smart&amp;blur=40&amp;format=pjpg&amp;auto=webp&amp;s=bac390e8772c23cd9708b91c1433d753f61ffe4f",
                                width: 960,
                                height: 1280,
                            },
                        ],
                    },
                    nsfw: {
                        source: {
                            url: "https://external-preview.redd.it/gHIFn17OYbnmbN7TOd4mCicxmUSv7TL366lDblVRaC4.jpg?blur=40&amp;format=pjpg&amp;auto=webp&amp;s=24f64a6f75a03dc54f800451ac6d5722567db5f3",
                            width: 960,
                            height: 1280,
                        },
                        resolutions: [
                            {
                                url: "https://external-preview.redd.it/gHIFn17OYbnmbN7TOd4mCicxmUSv7TL366lDblVRaC4.jpg?width=108&amp;crop=smart&amp;blur=10&amp;format=pjpg&amp;auto=webp&amp;s=85e7e3b534fe117f0fd79527df62fa9145c0b747",
                                width: 108,
                                height: 144,
                            },
                            {
                                url: "https://external-preview.redd.it/gHIFn17OYbnmbN7TOd4mCicxmUSv7TL366lDblVRaC4.jpg?width=216&amp;crop=smart&amp;blur=21&amp;format=pjpg&amp;auto=webp&amp;s=2a6444e483c405e9135284b6ca82a2fb454fa9f1",
                                width: 216,
                                height: 288,
                            },
                            {
                                url: "https://external-preview.redd.it/gHIFn17OYbnmbN7TOd4mCicxmUSv7TL366lDblVRaC4.jpg?width=320&amp;crop=smart&amp;blur=32&amp;format=pjpg&amp;auto=webp&amp;s=aef5acb25c555a89cb0d2da708a45f7b9308760d",
                                width: 320,
                                height: 426,
                            },
                            {
                                url: "https://external-preview.redd.it/gHIFn17OYbnmbN7TOd4mCicxmUSv7TL366lDblVRaC4.jpg?width=640&amp;crop=smart&amp;blur=40&amp;format=pjpg&amp;auto=webp&amp;s=be804f73f6f20ef6f2d98b9feec3029b3f99f132",
                                width: 640,
                                height: 853,
                            },
                            {
                                url: "https://external-preview.redd.it/gHIFn17OYbnmbN7TOd4mCicxmUSv7TL366lDblVRaC4.jpg?width=960&amp;crop=smart&amp;blur=40&amp;format=pjpg&amp;auto=webp&amp;s=bac390e8772c23cd9708b91c1433d753f61ffe4f",
                                width: 960,
                                height: 1280,
                            },
                        ],
                    },
                },
                id: "6eR72OjZxXlmEKjWrf_bz1JL1D-Yi7-l2yKp7vuM3Ho",
            },
        ],
        enabled: true,
    },
    all_awardings: [],
    awarders: [],
    media_only: false,
    can_gild: false,
    spoiler: false,
    locked: false,
    author_flair_text: null,
    treatment_tags: [],
    visited: false,
    removed_by: null,
    num_reports: null,
    distinguished: null,
    subreddit_id: "t5_2z3hs",
    author_is_blocked: false,
    mod_reason_by: null,
    removal_reason: null,
    link_flair_background_color: "",
    id: "u9eqnv",
    is_robot_indexable: true,
    report_reasons: null,
    author: "retohdfghj",
    discussion_type: null,
    num_comments: 0,
    send_replies: true,
    whitelist_status: "no_ads",
    contest_mode: false,
    mod_reports: [],
    author_patreon_flair: false,
    author_flair_text_color: null,
    permalink: "/r/MasterOfAnal/comments/u9eqnv/enjoy_the_view/",
    parent_whitelist_status: "no_ads",
    stickied: false,
    url: "https://i.imgur.com/LkGThfh.jpg",
    subreddit_subscribers: 377091,
    created_utc: 1650634240.0,
    num_crossposts: 0,
    media: null,
    is_video: false,
}

const parser = parseImgurPost(postContainingImgurMedia as any)

test("Should get thumbnail", () => {
    const thumbnail = parser.getThumbnail()
    expect(thumbnail).toEqual(postContainingImgurMedia.thumbnail)
})

test("Should get media", () => {
    const media = parser.getMedia()
    expect(media).toEqual(postContainingImgurMedia.url.replace(Extension.GifV, Extension.Mp4))
})

test("Media should be video", () => {
    const media = parser.getMediaType()
    expect(media).toEqual(MediaType.Video)
})
