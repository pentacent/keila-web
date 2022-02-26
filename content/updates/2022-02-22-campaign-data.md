---
title: Custom Campaign Data
slug: campaign-data
type: added
language: en
date: 2022-02-22
description: "The addition of *Custom Campaign Data* enables users to automatically populate newsletter campaigns with data from other sources."
---

The addition of *Custom Campaign Data* enables users to automatically populate
newsletter campaigns with data from other sources.
<!--more-->

<docs-image src="updates/2022-02-22-campaign-data.png" alt="Screenshot showing the campaign data feature in Keila"></docs-image>

Keila has long allowed users to specify custom data on a per-contact basis,
a concept known as *merge fields* elsewhere. But now Keila takes data-driven
campaigns one step further: It’s now also possible to specify custom data at
the *campaign level*.

Specifying data at the campaign level allows the creation of fully automated
campaigns, where some or all of the campaign text is generated based on custom
data and a template .

## Example

In this example, we want to include a list of books with titles linked to
product pages in an email.

To achieve this, we specify the following campaign data with a list of available
books:

```json
{
   "books":[
      {
         "title": "The Earth Book",
         "link": "https://books/earth-book"
      },
      {
         "title": "The Mars Book",
         "link": "https://books/mars-book"
      }
   ]
}
```

In the campaign editor, we can now write the following Markdown template using
the Liquid template language:

```liquid

{% for book in campaign.data.books %}

- [{{ book.title }}]({{ book.link }})

{% endfor %}
```

This will create a list of books based on our campaign data.