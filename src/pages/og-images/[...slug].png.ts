import { getStaticCollectionPaths } from "../../utils/i18n";
export async function getStaticPaths() {
  const articlePaths = await getStaticCollectionPaths("articles");
  const updatePaths = await getStaticCollectionPaths("updates");
  const legalPaths = await getStaticCollectionPaths("legal");
  const docsPaths = await getStaticCollectionPaths("docs");

  const landingPaths = [
    {
      params: { slug: "index_en" },
      props: {
        entry: {
          collection: "landing",
          data: { title: "Email Newsletters", subtitle: "100% Open Source" },
        },
      },
    },
    {
      params: { slug: "index_de" },
      props: {
        entry: {
          collection: "landing",
          data: { title: "E-Mail-Newsletter", subtitle: "100% Open Source" },
        },
      },
    },
    {
      params: { slug: "index_fr" },
      props: {
        entry: {
          collection: "landing",
          data: { title: "Infolettres libres", subtitle: "100% Open Source" },
        },
      },
    },
  ];

  return articlePaths
    .concat(updatePaths)
    .concat(legalPaths)
    .concat(docsPaths)
    .concat(landingPaths);
}

import { generateOgImage } from "../../utils/og-image";
import type { APIRoute } from "astro";
import { Resvg } from "@resvg/resvg-js";

const opts = {
  fitTo: {
    mode: "width",
    value: 1200,
  },
};

export const GET: APIRoute = async ({ props }) => {
  const svg = await generateOgImage(
    props.entry.collection,
    props.entry.data,
    props.lang,
  );

  const png = new Resvg(svg, opts).render().asPng();
  return new Response(png, {
    status: 200,
    headers: { "Content-Type": "image/png" },
  });
};
