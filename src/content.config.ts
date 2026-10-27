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
    hideTitle: z.boolean().optional().default(false),
    noindex: z.boolean().optional().default(false),
    // Full-width illustration above the title, see ArticleLayout. Also used
    // for the page's social preview image (see og-image.ts).
    hero: z
      .object({
        // Path like "/src/assets/example.svg", as for KeilaImage.
        src: z.string(),
        alt: z.string(),
        // Narrowest width:height the image may be cropped to on small
        // screens. Defaults to its own shape (never cropped).
        minAspectRatio: z.number().optional(),
        // CSS object-position used when cropping.
        position: z.string().optional().default("50% 50%"),
      })
      .optional(),
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
