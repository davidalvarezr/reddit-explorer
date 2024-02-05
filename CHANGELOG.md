# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) (since 1.4.0),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- ability to easily fetch medias with `redditClient.getSubredditMedias(...)`

## 1.4.0 - 2024-02-05

### Added

- RedditSimpleClient: easily fetch only what you need

### Fixed

- Now compatible with both node & web

### Removed

- Removed the storage of the token: was causing compatibility issue between browser & node (and was useless)

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