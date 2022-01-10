---
title: Setup
slug: setup
---

# Self-Hosting Keila: First Steps

When you start your self-hosted instance of Keila for the first time, the
database you’ve configured with `DB_URL` is set up automatically.

Keila automatically creates a root user with full admin privileges and prints
the credentials to stdout on first launch. To specify a custom email and
password for your root user, use the `KEILA_USER` and `KEILA_PASSWORD`
environment variables.

**Note:** The root user credentials are only printed on first start.
