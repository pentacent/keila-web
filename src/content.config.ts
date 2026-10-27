import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Entry IDs are the file path without extension (e.g. `en/open-source`),
// matching the IDs of the legacy content collections. This keeps the language
// prefix that i18n.ts relies on, even for entries with a `slug` in frontmatter.
const contentLoader = (base: string) =>
  glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: `./src/content/${base}`,
    generateId: ({ entry }) => entry.replace(/\.[a-z]+$/, ""),
  });

const articleCollection = defineCollection({
  loader: contentLoader("articles"),
  schema: z.object({
    title: z.string(),
    lang: z.string().optional(),
    localSlug: z.string().optional(),
    disableTranslations: z.boolean().optional().default(false),
    description: z.string().optional(),
      noindex: z.boolean().optional().default(false),
  }),
});

const docsCollection = defineCollection({
  loader: contentLoader("docs"),
  schema: z.object({
    title: z.string(),
    lang: z.string().optional(),
    localSlug: z.string().optional(),
    disableTranslations: z.boolean().optional().default(false),
    description: z.string().optional(),
  }),
});

const legalCollection = defineCollection({
  loader: contentLoader("legal"),
  schema: z.object({
    title: z.string(),
    lang: z.string().optional(),
    localSlug: z.string().optional(),
    disableTranslations: z.boolean().optional().default(false),
    description: z.string().optional(),
  }),
});

const updateCollection = defineCollection({
  loader: contentLoader("updates"),
  schema: z.object({
    title: z.string(),
    lang: z.string().optional(),
    date: z.date(),
    version: z.string(),
    localSlug: z.string().optional(),
    disableTranslations: z.boolean().optional().default(false),
    description: z.string().optional(),
    ogImage: z.string().optional(),
  }),
});

const landingCollection = defineCollection({
  loader: contentLoader("landing"),
  schema: z.object({}),
});

export const collections = {
  articles: articleCollection,
  docs: docsCollection,
  landing: landingCollection,
  legal: legalCollection,
  updates: updateCollection,
};
