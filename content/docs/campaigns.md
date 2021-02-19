---
title: Campaigns
slug: campaigns
---

# Campaigns

*Campaigns* are the emails you send to your contacts.

In order to create a new campaign, navigate to the *Campaigns* page from the
main menu and click on *Create new Campaign*.

You can then choose a subject for your campaign and a campaign type. Right now,
*plain text* and *Markdown* are supported.

<docs-image src="docs/campaign.png" alt="Screenshot of the Campaign editor in Keila"></docs-image>

## Liquid Templating
Keila supports the [Liquid template language](https://shopify.github.io/liquid/)
in campaigns. The following Liquid assigns are available in every campaign:

- `{{ contact }}` - Object with data about the contact receiving the email with
  the following properties:
  - `{{ contact.email }}`
  - `{{ contact.first_name }}`
  - `{{ contact.last_name }}`
- `{{ unsubscribe_link }}` - URL of the one-click unsubscription link

If not all contacts in your database have given their first name, Liquid’s `default`
tag is very useful.

`Hey {{ contact.first_name | default: "there" }}` will render as `Hey Jane` for
a contact with the first name `Jane` and as `Hey there` for a contact with no
first name set.


## Markdown
Markdown campaigns support Liquid templating just like plain-text campaigns do.
In addition, text you enter is processed as [GitHub-flavored Markdown](https://github.github.com/gfm/).

Since Markdown doesn’t natively support the creation of buttons, here’s a little
trick you can use with Keila:

`#### [Your text](https://example.com) ####` is automatically turned into a
call-to-action button.