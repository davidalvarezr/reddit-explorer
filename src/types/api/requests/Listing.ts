export type Listing =
    | (ListingWithoutBeforeNorAfter & {
          after?: string | null // these indicate the fullname of an item in the listing to use as the anchor point of the slice
      })
    | (ListingWithoutBeforeNorAfter & {
          before?: string // these indicate the fullname of an item in the listing to use as the anchor point of the slice
      })

type ListingWithoutBeforeNorAfter = {
    limit?: number // the maximum number of items desired (default: 25, maximum: 100)
    count?: number // the number of items already seen in this listing. on the html site, the builder uses this to determine when to give values for before and after in the response
    show?: string // optional parameter; if all is passed, filters such as "hide links that I have voted on" will be disabled
    sr_detail?: boolean // More details about the subreddit
}
