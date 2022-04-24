# Changelog

### 1.1.1 - 2022-04-24
#### docs
- updated README, npm keywords

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