---
title: Markdown As-You-Type & WYSIWYG Improvements
slug: markdown-as-you-type
type: added
language: en
date: 2022-02-22
version: 0.9.0
description: "This update for Keila’s WYSIWYG editor brings automatic recognition of Markdown as-you-type and improved support for the Liquid template language."
---

This update for Keila’s WYSIWYG editor brings automatic recognition of Markdown
as-you-type and improved support for the Liquid template language.
<!--more-->

## Markdown As-You-Type

[Markdown](https://en.wikipedia.org/wiki/Markdown) has long been the most
popular way of formatting text content without writing HTML directly or relying
exclusively on the clicking of UI buttons.

This update brings Markdown support to Keila’s WYSIWYG editor. If you type
Markdown (e.g. by using `*` for italics or `-` at the beginning of a line to
create list), the corresponding formatting is now automatically applied.

<video
    loop
    controls
    class="w-full shadow-lg"
    width="1280"
    height="800"
    autoplay
    loop
              >
    <source src="/updates/2022-02-22-markdown-as-you-type.mp4" type="video/mp4" />
</video>

## Improved Liquid Support

In addition to the new Markdown-as-you-type feature, Keila’s WYSIWYG editor now
also makes it easier to use Shopify’s
[Liquid template language](https://shopify.github.io/liquid/) in newsletter
campaigns. Liquid code is now highlighted in the editor to make it stand out
more. This highlighting is applied automatically as-you-type. Additionally,
there’s now a new *Code* button in the WYSIWYG editor menu to guide less
experienced users when inserting Liquid tags into their campaigns.
