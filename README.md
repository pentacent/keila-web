# Keila Website

This is the repository for the [Keila website](https://keila.io) which includes
the landing page and the [Keila docs](https://keila.io/docs)

## Installation

This site is powered by [Astro](https://astro.build/).

You can install and use it on a local machine like this:

```sh
# install dependencies
npm install

# serve with hot reload at localhost:4321
npm run dev

# run formatter
npm run format

# generate static pages for deployment
npm run generate
```

## Translating

If you want to contribute a translation, you can find all translatable pages in `src/content`.
Additional strings can be found in `src/utils/i18n.ts`.

To enable a new translation, make sure to add it to the configuration in `astro.config.mjs`

If you’re a first-time contributor, please sign the [CLA](https://github.com/pentacent/keila/blob/main/.cla/README.md)
when you submit your translation.
