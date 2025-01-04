// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

const articleCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    lang: z.string().optional(),
    localSlug: z.string().optional(),
    disableTranslations: z.boolean().optional().default(false),
    description: z.string().optional(),
  }),
});

const docsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    lang: z.string().optional(),
    localSlug: z.string().optional(),
    disableTranslations: z.boolean().optional().default(false),
    description: z.string().optional(),
  }),
});

const updateCollection = defineCollection({
  type: "content",
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
  type: "content",
  schema: z.object({}),
});

export const collections = {
  articles: articleCollection,
  docs: docsCollection,
  landing: landingCollection,
  updates: updateCollection,
};
