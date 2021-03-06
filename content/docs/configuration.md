---
title: Configuration
slug: configuration
next: setup
---

# Configuration

You can configure Keila with environment variables.

## Database
Configure the PostgreSQL database used by Keila:

| Variable      | Required | Default | Description  |
| ---------------- | -------- | ------- | --------------------------------------- |
| `DB_URL`         | yes      | -       | URL following the schema `postgres://user:password@host/database` |
| `KEILA_USER`     |          | `root@localhost` | Email address for the root user |
| `KEILA_PASSWORD` |          | *random* | Password for the root user           |

## URL
Configure the URL that Keila uses to generate URLs with the following variables:


| Variable      | Required | Default | Description  |
| ------------- | -------- | ------- | --------------------------------------- |
| `URL_HOST`    | yes      | -       | Domain used for URL generation          |
| `URL_SCHEMA`  |          | `http`  | `http` or `https`. Used for URL generation |
| `URL_PORT`    |          | `80` for schema `http`<br>443 for schema `https` | Used for URL generation |

## Deployment

| Variable               | Required | Default | Description                    |
| ---------------------- | -------- | ------- | ------------------------------ |
| `PORT`                 |          | `4000`  | Port on which Keila will listen |
| `SECRET_KEY_BASE`      | yes      | -       | Strong secret with at least 64 characters. Can be generated with `head -c 48 /dev/urandom | base64` |
| `DISABLE_REGISTRATION` |          | `false` | Disable user registration by setting this variable to `true` |
| `DISABLE_PRECEDENCE_HEADER` |     | `false` | Disable the `Precedence: Bulk` header by settings this variable to `true` |

## System mailer
Keila needs to be able to send system emails, e.g. for registration and password
reset emails. Configure an SMTP sender for this purpose with the following
variables:

| Variable               | Required | Default | Description                    |
| ---------------------- | -------- | ------- | ------------------------------ |
| `MAILER_TYPE`          |          | `smtp`  | Currently only `smtp` is supported |
| `MAILER_SMTP_HOST`     | yes      | -       | Hostname of the SMTP server    |
| `MAILER_SMTP_PORT`     |          | `587`   | Port of the SMTP server   |
| `MAILER_SMTP_USER`     | yes      | -       | Username for the SMTP server   |
| `MAILER_SMTP_PASSWORD` | yes      | -       | Password for the SMTP server   |

## hCaptcha
Keila uses hCaptcha to protect your sign-up forms. Configure hCaptcha with the
following variables:

| Variable              | Required | Default | Description                     |
| --------------------- | -------- | ------- | ------------------------------- |
| `HCAPTCHA_SITE_KEY`   |          | -       | hCaptcha site key               |
| `HCAPTCHA_SECRET_KEY` |          | `http`  | hCaptcha secret key             |
| `HCAPTCHA_URL`        |          | `https://hcaptcha.com/siteverify` | hCaptcha verification URL |