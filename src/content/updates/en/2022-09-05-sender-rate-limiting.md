---
title: Rate Limiting for Senders
slug: sender-rate-limiting
type: added
language: en
date: 2022-09-05
version: 0.10.0
description: "Senders can now be rate-limited."
---

**It’s now possible to set rate-limits for senders and shared senders.**

To avoid overwhelming a mail server when sending out a campaign - or to make
sure you’re respecting the limitations of a third-party service - Keila now
allows you to set rate limits for senders and for shared senders.

Rate-limits can be set per second, per minute, and per hour. If a rate-limit is
set for a shared sender, it is applied across all senders using that shared
sender.
