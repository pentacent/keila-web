import { createMarkdownProcessor } from "@astrojs/markdown-remark";

// Render Markdown the same way Astro renders .md/.mdx content. OpenAPI spec
// `description` fields are CommonMark, so this lets bold/links/code/lists in the
// schema show up formatted in the API reference instead of as literal text.
//
// The processor is created with default options, matching the (unconfigured)
// markdown settings in astro.config.mjs. It is memoized because construction is
// relatively expensive and these helpers run once per description at build time.
let processorPromise: ReturnType<typeof createMarkdownProcessor> | null = null;

function getProcessor() {
  if (!processorPromise) {
    processorPromise = createMarkdownProcessor();
  }
  return processorPromise;
}

// Block-level Markdown: keeps the wrapping <p>, lists, etc. Use where the
// description stands on its own (e.g. an endpoint description).
export async function renderMarkdown(input?: string | null): Promise<string> {
  if (!input) return "";
  const processor = await getProcessor();
  const { code } = await processor.render(input);
  return code;
}

// Inline Markdown: strips a single wrapping <p> so the result can sit inside a
// table cell or <span> without an unwanted block/paragraph. Multi-paragraph
// input keeps its structure (only the outermost single <p> is unwrapped).
export async function renderMarkdownInline(
  input?: string | null
): Promise<string> {
  const html = await renderMarkdown(input);
  // Only unwrap when the whole output is a single paragraph; otherwise leave the
  // block structure intact rather than risk merging multiple paragraphs.
  const match = html.match(/^<p>([\s\S]*?)<\/p>\s*$/);
  if (match && !match[1].includes("<p")) return match[1].trim();
  return html;
}
