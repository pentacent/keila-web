---
title: Senders
slug: senders
next: contacts
---

# Senders: Bring Your Own Email Service

*Senders* are how Keila sends out emails.

For larger projects it’s recommended to either use your own dedicated email
infrastructure or rely on an externally managed email service. For smaller
projects you could even use your personal email (via SMTP) to send your
newsletters.

You need to create a Sender before you can send your first campaign with Keila.

On your project overview page, click on `Manage Senders` and then on *Create new Sender*.

<docs-image src="docs/sender.png" alt="Screenshot of the sender form in Keila"></docs-image>

Currently, the following sender types are supported:

- SMTP
- AWS SES
- Sendgrid
- Mailgun
- Postmark

Additionally, if you’re using our [managed newsletter solution at keila.io](https://www.keila.io/try),
you can select *Send with Keila*.
