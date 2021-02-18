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
| ------------- | -------- | ------- | --------------------------------------- |
| `DB_URL`      | yes      | -       | URL following the schema `postgres://user:password/database` |

## URL
Configure the URL that Keila uses to generate URLs with the following variables:


| Variable      | Required | Default | Description  |
| ------------- | -------- | ------- | --------------------------------------- |
| `URL_HOST`    | yes      | -       | Domain used for URL generation          |
| `URL_SCHEMA`  |          | `http`  | `http` or `https`. Used for URL generation |
| `URL_PORT`    |          | `80` for schema `http`<br>443 for schema `https` | Used for URL generation |


## hCaptcha
Keila uses hCaptcha to protect your sign-up forms. Configure hCaptcha with the
following variables:

| Variable              | Required | Default | Description                     |
| --------------------- | -------- | ------- | ------------------------------- |
| `HCAPTCHA_SITE_KEY`   |          | -       | hCaptcha site key               |
| `HCAPTCHA_SECRET_KEY` |          | `http`  | hCaptcha secret key             |
| `HCAPTCHA_URL`        |          | `https://hcaptcha.com/siteverify` | hCaptcha verification URL |

## System mailer
Keila needs to be able to send system emails, e.g. for registration and password
reset emails. Configure an SMTP sender for this purpose with the following
variables:

| Variable               | Required | Default | Description                    |
| ---------------------- | -------- | ------- | ------------------------------ |
| `MAILER_TYPE`          |          | `smtp`  | Currently only `smtp` is supported |
| `MAILER_HOST`          | yes      | -       | Hostname of the SMTP server    |
| `MAILER_SMTP_PORT`     |          | `587`   | Port of the SMTP server   |
| `MAILER_USER`          | yes      | -       | Username for the SMTP server   |
| `MAILER_SMTP_PASSWORD` | yes      | -       | Password for the SMTP server   |

## Deployment
If you want to deploy a private instance of Keila and not allow users to create
an account, set the following variable:

| Variable               | Required | Default | Description                    |
| ---------------------- | -------- | ------- | ------------------------------ |
| `DISABLE_REGISTRATION` |          | `false` | Disable user registration by setting this variable to `true` |
