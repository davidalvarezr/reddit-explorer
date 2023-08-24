# Changelog

## 1.3.0 - 2022-04-26
#### new features
- search in multiple subreddits

#### small improvements
- added filters which can directly be used:
    - hasNComments
    - has[MoreThan][LessThan]NComments
    - has[MoreOrSameThan][LessOrSameThan]NComments
    - hasMoreThanNCrossposts
    - hasMoreThanNUpvoteRatio
    - isMatureContent
    - isNotMatureContent

## 1.2.0 - 2022-04-25
#### new features
- post filters: filter the GetSubredditResponse according to an array of criteria

#### docs
- updated README, added badges
- added npm keywords

## 1.1.0 - 2022-04-24
#### new features
- getSubredditIterator: let the package handle pagination for you

#### small improvements
- sr_details is available in response type
- mature content can be changed after client initialization

#### bug fixes
- should not throw exception because token.txt doesn't exist
- should only show types in index
- fixed bug that did not disable matureContent at init