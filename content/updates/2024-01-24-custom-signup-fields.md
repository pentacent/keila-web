---
title: Custom Signup Fields
slug: custom-signup-fields
type: added 
language: en
date: 2024-01-24
version: 0.14.0
description: "You can now add custom fields to your newsletter signup forms."
---
You can now add custom fields to your newsletter signup forms.
<!--more-->

<docs-image src="updates/2024-01-24-custom-fields.png" alt="Screenshot showing a newsletter signup field created with Keila featuring a custom text field, a custom dropdown field, and a custom tags field."></docs-image>

The form settings now allow you to specify a variety of custom fields:

- Text fields
- Dropdowns (i.e. field with multiple options where only one option can be selected)
- Tags (i. e. a field where multiple options can be selected at the same time)
- Checkboxes

All custom fields can be optional or required. The data from custom fields is
stored in the `data` JSON object associated with the newly generated contact.
