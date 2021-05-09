---
sidebar_position: 4
---

# Roadmap

## Features

- [ ] Flexible matching: e.g. if `gh` is set for `https://github.com`, then `gh/{username}` should go to `https://github.com/{username}`.
- [ ] Seach ranking: when there is no exact matching, return a ranked list for potential targets.
- [ ] Better UI: the default `create-react-app` UI isn't great, probably make it more of a branding.
- [ ] Redesign logo: we are currently using a emoji as logo. We can do better.
- [ ] More transition page options.
    - [ ] Redirect to the configuration repository.
    - [ ] Option to continue to a link in case the first try was a typo.

## Platforms

- [ ] CLI: type `wow gh` and it opens `https://github.com` in the default browser.
- [ ] API: a API that gets the wow link and returns the full link for creative extension use cases.

## Extensions

- [ ] URL validation: a GitHub action to validate if all URLs are up-to-date will be pretty useful.
- [ ] Link highlighting: an Edge/Chrome extension to highlight/hyperlinkify short links on current page.
- [ ] Reverse lookup: a service to lookup if a full links has been shorten by a teammate.
 