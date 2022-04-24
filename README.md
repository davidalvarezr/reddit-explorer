<p align="center">
   <a href="https://nodei.co/npm/reddit-explorer/"><img src="https://nodei.co/npm/reddit-explorer.png?downloads=true&downloadRank=true&stars=true"></a>
</p>

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=davidalvarezr_reddit-explorer&metric=bugs)](https://sonarcloud.io/summary/new_code?id=davidalvarezr_reddit-explorer)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=davidalvarezr_reddit-explorer&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=davidalvarezr_reddit-explorer)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=davidalvarezr_reddit-explorer&metric=coverage)](https://sonarcloud.io/summary/new_code?id=davidalvarezr_reddit-explorer)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=davidalvarezr_reddit-explorer&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=davidalvarezr_reddit-explorer)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=davidalvarezr_reddit-explorer&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=davidalvarezr_reddit-explorer)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=davidalvarezr_reddit-explorer&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=davidalvarezr_reddit-explorer)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=davidalvarezr_reddit-explorer&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=davidalvarezr_reddit-explorer)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=davidalvarezr_reddit-explorer&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=davidalvarezr_reddit-explorer)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=davidalvarezr_reddit-explorer&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=davidalvarezr_reddit-explorer)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=davidalvarezr_reddit-explorer&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=davidalvarezr_reddit-explorer)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=davidalvarezr_reddit-explorer&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=davidalvarezr_reddit-explorer)

# reddit-explorer
The current version is **1.1.1**

To see what has been done on each version, you can consult the 
[CHANGELOG](https://github.com/davidalvarezr/reddit-explorer/blob/master/CHANGELOG.md).

## Installation
### Command line
```
npm install reddit-explorer
```

### Create a dev application on Reddit (if you do not have already one)

You have to pass your app credentials, see how to generate some:

1. Go to https://www.reddit.com/prefs/apps
2. At the bottom of the page click "**create another app...**", fill all the fields and then click "**create app**". You
   now see your **clientId** and **secret**.

   ![credentials](./credentials.png)

## API
For the moment **reddit-explorer** has 3 features:
1. Authentication with clientId & secret
1. Getting similar subreddit names of a `string`
1. Getting the content of a subreddit (+ automatic pagination handling)
1. Easily filter the posts of a response   

I'm actively working on other features that are coming soon :) 

### Initializing the client
```ts
import { createRedditClient, SortingMethod, TimeRange, PostFilter } from "reddit-explorer"

const reddit = createRedditClient({
    clientId: "<clientId>",
    secret: "<secret>",
})
```

### Getting subreddit names
```ts
reddit.getSubredditNames({ query: "photo" })
    .then((res) => console.log("photo", res))

// photo {
//    names: [
//       'photo',
//       'photoshopbattles',
//       'photography',
//       'photocritique',
//       'photoshop',
//       'PhotoshopRequest',
//       'PhotoshopTutorials',
//       'photographs',
//       'photomarket',
//       'Photography101'
//    ]
// }
```

### Getting the content of a subreddit
You have to pass a name and a `SortingMethod`. Sorting method can be: `Hot`, `New`, `Random`, `Rising`, `Top` or
`Controversial`.

If the sorting method is `Top` or `Controversial`, you can also pass a `TimeRange`. Time range can be: `Hour`, `Day`,
`Week`, `Month`, `Year`, `All`.

The package offers the type `SubredditData` which is the type of all the `[Object]` below (see at the end of the readme).
```ts
reddit
    .getSubreddit({
        name: "meme",
        sortMethod: SortingMethod.New,
    })
    .then((res) => console.log("meme", res))

// meme {
//     kind: 'Listing',
//     data: {
//     after: 't3_u9osas',
//     dist: 25,
//     modhash: '',
//     geo_filter: '',
//     children: [
//          [Object], [Object], [Object],
//          [Object], [Object], [Object],
//          [Object], [Object], [Object],
//          [Object], [Object], [Object],
//          [Object], [Object], [Object],
//          [Object], [Object], [Object],
//          [Object], [Object], [Object],
//          [Object], [Object], [Object],
//          [Object]
//       ], 
//     before: null
//    }
// }

// Example with a TimeRange:

reddit
    .getSubreddit({
       name: "meme",
       sortMethod: SortingMethod.Top,
       t: TimeRange.Day,
    })
    .then((res) => console.log("meme", res))
```

#### Filter the results of a response
If you want to keep only specific posts in the response, you can use `postFilters` when creating the client. This
attribute accepts an array of functions, each one taking a `SubredditData` into parameter and returning a `boolean`:
```ts
const moreThan100Comments: PostFilter = (subredditData) => subredditData.num_comments > 100

const moreThan2Crossposts: PostFilter = (subredditData) => subredditData.num_crossposts > 2

const clientShowingOnlyPopularPosts = createRedditClient({
    clientId: secrets.clientId,
    secret: secrets.secret,
    postFilters: [moreThan100Comments, moreThan2Crossposts],
})
```


### Loading next results

The API can only load a max amount of 25 posts. To load the next 25 posts, you have to pass the `after` param.
You can find the value of the `after` in the previous response of the request you made, in `response.after`. It contains
the `name` (`SubredditData.name`) of the last post in the previous call.

```ts
reddit
    .getSubreddit({
        name: "meme",
        sortMethod: SortingMethod.New,
        after: "t3_u9osas", // response.after of the previous call
    })
    .then((res) => console.log("meme", res))
```

#### Using iterators
If you do not want to memorize the `after` attribute of the last response yourself, you can let the package handle it for
you, using `getSubredditIterator`:

```ts
const memeSubredditIterator = reddit.getSubredditIterator({
    name: "meme",
    sortMethod: SortingMethod.New,
    limit: 5,
})

const memeResults0To4 = await memeSubredditIterator.next()
const memeResults5To9 = await memeSubredditIterator.next()

console.log("memeResults0To4", memeResults0To4.value)
console.log("memeResults5To9", memeResults5To9.value)

// memeResults0To4 {
//     kind: 'Listing',
//         data: {
//         after: 't3_uaslor',
//             dist: 5,
//             modhash: '',
//             geo_filter: '',
//             children: [ [Object], [Object], [Object], [Object], [Object] ],
//             before: null
//     }
// }
// memeResults5To9 {
//     kind: 'Listing',
//         data: {
//         after: 't3_uas9sy',
//             dist: 5,
//             modhash: '',
//             geo_filter: '',
//             children: [ [Object], [Object], [Object], [Object], [Object] ],
//             before: null
//     }
// }
```

### Include adult subreddit names

There are three ways to achieve that:

1. At the initialization of the client:
    ```ts
    import { createRedditClient } from "reddit-explorer"
   
    const reddit = createRedditClient({
       clientId: "<clientId>",
       secret: "<secret>",
       matureContent: true,
    })
    ```
2. When calling the method:
    ```
    reddit.getSubredditNames({ query: "photo", include_over_18: true })
        .then((res) => console.log("photo", res))
    ```
3. After the initialization of the client
    ```
    reddit.config.setMatureContent(true)
    ```

---

### `SubredditData` type
This type offers the possibility to handle the response more easily (`response.children[0]`):

```ts
export type SubredditData = {
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
        oembed: {
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
    crosspost_parent_list?: SubredditData[]
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
        oembed: {
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
```

### Sources
Here you'll find the official documentation of the reddit official endpoints that this package uses:

- Search reddit names: https://www.reddit.com/dev/api/#GET_api_search_reddit_names
- Subreddit
   - controversial: https://www.reddit.com/dev/api/#GET_controversial
   - hot: https://www.reddit.com/dev/api/#GET_hot
   - new: https://www.reddit.com/dev/api/#GET_new
   - random: https://www.reddit.com/dev/api/#GET_random
   - rising: https://www.reddit.com/dev/api/#GET_rising
   - top: https://www.reddit.com/dev/api/#GET_top
   - sort: https://www.reddit.com/dev/api/#GET_{sort}
