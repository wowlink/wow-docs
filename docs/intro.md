---
sidebar_position: 1
---

# WOW Link 101

Let's get started using **WOW Link in less than 5 minutes**.

## Overview

WOW Link is a "goto" link service that allow users to define custom URL mappings with GitHub repositories.

For example, <https://github.com> can be mapped to `gh` with a GitHub repository (as a translation dictionary). After configuring, typing `gh` in the browser search bar will redirect to <https://github.com>.

## Configure WOW Link

Here is a step by step tutorial for configuring a browser to use WOW Link service. We will be using Edge brower as an example.

:::note
Wondering why not Chrome? That's because I personally use Edge since it's basically Chrome minus all the RAM eaters.
:::

### Open settings

![](/img/getting_started/edge/edge_settings.png)

### Find address bar settings

![](/img/getting_started/edge/search_engine_settings.png)

### Find search engine settings

![](/img/getting_started/edge/manage_search_engine.png)

### Add custom search engine

![](/img/getting_started/edge/add_search_engine.png)

### Fill in WOW Link config

WOW Link supports many [configuration options](/docs/config), but for the purpose of demonstration, we will use the default value for all optional configurations and use `https://wowlink.github.io/wow-page?wow=%s` which uses the default configuration at <https://github.com/wowlink/default-profile>.

![](/img/getting_started/edge/add_details.png)

## Try it out!

Using WOW Link is the same on Chrome and Edge, just type the keyword, which in this case is `wow`, followed by a space in the search bar, and then type the name of the website. For example, `amzn` for <https://amazon.com>, `gh` for <https://github.com> or for my personal mapping, `gh/me` for <https://github.com/tianhaoz95>.

Here is how it works in action:

![try it out on Edge](/img/getting_started/edge/try_out_wowlink.gif)

:::note
Some of you might noticed that the transition page is the default page from `create-react-app`. Yes, that's correct... I'm too lazy to change it.
:::

## Customizations

In the example above, we configured a bare minimum WOW Link service that uses the global default configurations from <https://github.com/wowlink/default-profile> which is useful for the majority of people.

However, different people will have different sets of frequently used websites and different ways for naming them, so it's important to have a personalized configuration.

As discussed in the intro, WOW Link currently uses a GitHub repository as the configuration which can be configured with URL parameters.

For example, with URL `https://wowlink.github.io/wow-page?wow=%s&gh_user=octowow&gh_repo=wow-profile`, the WOW Link service will read the `config.yaml` file inside the GitHub repository `octowow/wow-profile`.

Here is an example `config.yaml`:

```yml
# Example config.yaml in octowow/wow-profile
wowlinks:
  "aapl": "https://www.apple.com"
  "amzn": "https://amazon.com"
  "msft": "https://onedrive.live.com"
  "gh": "https://github.com"
  "g": "https://google.com"
  "yt": "https://www.youtube.com"
```

:::tip
Since it's your repository, feel free to add any creative link mappings.

Also, with the config being a GitHub repository, there are a lot of GitHub tricks that can be applied. For example, having a GitHub action to validate if any of the URLs are outdated or creative automations.
:::
