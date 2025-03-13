import * as fs from "fs";

import satori from "satori";
import { html } from "satori-html";
import sharp from "sharp";

const inter = fs.readFileSync(
  "./node_modules/@fontsource/inter/files/inter-latin-400-normal.woff",
);
const interBold = fs.readFileSync(
  "./node_modules/@fontsource/inter/files/inter-latin-700-normal.woff",
);

const defaultTemplate = html(
  fs.readFileSync("./src/utils/og-images/default.html").toString(),
);
const updateTemplate = html(
  fs.readFileSync("./src/utils/og-images/update.html").toString(),
);

const opts = {
  width: 1200,
  height: 630,
  fonts: [
    {
      name: "Inter",
      data: inter,
      weight: 400,
      style: "normal",
    },

    {
      name: "Inter",
      data: interBold,
      weight: 700,
      style: "normal",
    },
  ],
};

const getImageBase64 = async (path, size) => {
  const image = await sharp(path).resize(size).jpeg({ quality: 80 }).toBuffer();

  return image && image.toString("base64");
};

const template = async function (template, assigns, lang) {
  switch (template) {
    case "updates": {
      let t = JSON.parse(JSON.stringify(updateTemplate));

      t.props.children[0].props.children[3].props.children[1].props.children[3].props.children =
        assigns.title;

      t.props.children[0].props.children[3].props.children[1].props.children[1].props.children =
        "Keila " + assigns.version;

      const image =
        assigns.ogImage &&
        (await getImageBase64(`./src/assets/updates/${assigns.ogImage}`, 630));

      if (image) {
        t.props.children[0].props.children[3].props.children[3].props.src = `data:image/jpeg;base64,${image}`;
      } else {
        t.props.children[0].props.children[3].props.children[3] = null;
      }

      return t;
    }

    default: {
      let t = JSON.parse(JSON.stringify(defaultTemplate));

      t.props.children[0].props.children[3].props.children[1].props.children[1].props.children =
        assigns.title;

      const image = await getImageBase64(
        "./src/assets/screenshots/block-editor.png",
        630,
      );
      if (image) {
        t.props.children[0].props.children[3].props.children[3].props.src = `data:image/jpeg;base64,${image}`;
      } else {
        t.props.children[0].props.children[3].props.children[3] = null;
      }
      return t;
    }
  }
};

export async function generateOgImage(collection, assigns, lang) {
  const t = await template(collection, assigns, lang);

  return satori(t, opts).catch((error) => {
    console.warn(error, "Creating OG Image failed");
  });
}
