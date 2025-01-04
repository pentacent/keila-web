import {
  getEntry,
  getCollection,
  type ContentEntryMap,
  type CollectionEntry,
} from "astro:content";

import {
  strings,
  defaultLang,
  showDefaultLang,
  languages,
  type language,
  type key,
} from "./translations";

export function useTranslations(lang: language) {
  return function t(key: key, l: language = lang) {
    return (
      strings[l][key] ||
      strings[defaultLang][key] ||
      `Missing translation: ${key}`
    );
  };
}

const getLocalSlug = (entry) => {
  if (entry.data.localSlug) return entry.data.localSlug;

  const [lang, ...slugParts] = entry.id.split("/");
  return slugParts.join("/").replace(/\.[a-z]+$/, "");
};

export function articleLink(article, langOverride?: language) {
  const localSlug = getLocalSlug(article);

  return (langOverride || article.data.lang) == defaultLang && !showDefaultLang
    ? `/${localSlug}`
    : `/${langOverride || article.data.lang}/${localSlug}`;
}

export function getLangAndI18nId(entry): [language, string] {
  const [lang, ...idParts] = entry.id.split("/");
  const i18nId = idParts
    .join("/")
    .replace(/\.[a-z]+$/, "")
    .replace(/^\d{4}-\d{2}-\d{2}-/, "");

  return [lang, i18nId];
}

export async function getCollectionTranslations(
  collection: keyof ContentEntryMap,
  filter?: (entry: CollectionEntry<typeof collection>) => boolean,
): Promise<Record<string, CollectionEntry<typeof collection>[]>> {
  const entries = await getCollection(collection, filter);
  return entries.reduce((translations, entry) => {
    const [lang, i18nId] = getLangAndI18nId(entry);

    // Initialize translations map if necessary
    if (!translations[i18nId]) translations[i18nId] = {};

    // Put language and localSlug in entry data
    entry.data.lang = lang;
    entry.data.localSlug = entry.data.localSlug || i18nId;

    // Put entry in translations map
    translations[i18nId][lang] = entry;

    // If entry is in the default language, initialize all other languages with
    // default language entry
    if (lang === defaultLang) {
      languages.forEach((lang) => {
        translations[i18nId][lang] = translations[i18nId][lang] || entry;
      });
    }
    return translations;
  }, {});
}

export function getTranslatedContentLink(collection, i18nId, lang, entries) {
  const entryTranslations = entries[i18nId];
  if (!entryTranslations) return;

  const entry = entryTranslations[lang];

  const langPrefix = lang == defaultLang ? "/" : "/" + lang + "/";
  const collectionPrefix = collection === "articles" ? "" : `${collection}/`;
  const prefix = langPrefix + collectionPrefix;
  console.log(
    i18nId,
    collection,
    i18nId === "index" ? prefix : prefix + entry.data.localSlug,
  );
  if (entry) {
    console.log(i18nId === "index" ? prefix : prefix + entry.data.localSlug);
    return i18nId === "index" ? prefix : prefix + entry.data.localSlug;
  }
}

export async function useTranslateContentPath(collection, lang, entries?) {
  entries = entries || (await getCollectionTranslations(collection));
  return (i18nId) =>
    getTranslatedContentLink(collection, i18nId, lang, entries);
}

export async function getStaticCollectionPaths(
  collection: keyof ContentEntryMap,
) {
  const translations = await getCollectionTranslations(collection);

  let routes = [];

  for (const [i18nId, entryTranslations] of Object.entries(translations)) {
    let entryTranslationProp = {};
    for (const [lang, entry] of Object.entries(entryTranslations)) {
      const link = await getTranslatedContentLink(
        collection,
        i18nId,
        lang,
        translations,
      );
      entryTranslationProp[lang] = link;
      const slug = link.substring(1);

      routes.push({
        params: { slug },
        props: { entry, lang, translations: entryTranslationProp },
      });
    }
  }

  return routes;
}

export function localDate(date, lang) {
  return date.toLocaleString(lang, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}
