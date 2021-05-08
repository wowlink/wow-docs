---
sidebar_position: 2
---

# Configuration

## WOW Page Config

Base URL: <https://wowlink.github.io/wow-page>

|  Options  |                       Description                       |   Type    |
| :-------: | :-----------------------------------------------------: | :-------: |
|   `wow`   |                   The target WOW link                   | `string`  |
| `gh_user` |  The username of GitHub account to fetch link mapping   | `string`  |
| `gh_repo` | The name of the GitHub repository to fetch link mapping | `string`  |
|   `dev`   |     If the site should print debugging information      | `boolean` |

:::tip
For example, setting `https://wowlink.github.io/wow-page?gh_user=wowlink&gh_repo=default-profile&wow=%s` as the search engine will use the `config.yaml` (default value) from `wowlink/default-profile` repository to do the link translation.

:::
