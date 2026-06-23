const OPENAPI_URL = "https://app.keila.io/api/v1/openapi";

export interface ApiOperation {
  method: string; // "get" | "post" | "put" | "patch" | "delete"
  path: string; // e.g. "/api/v1/contacts"
  summary?: string;
  description?: string;
  operationId?: string;
  parameters: any[];
  requestBody?: any;
  responses: Record<string, any>;
  tags: string[];
}

export interface ApiTag {
  name: string; // raw tag from the spec, e.g. "Contacts"
  slug: string; // URL slug, e.g. "contacts"
  title: string; // display name, e.g. "Contacts"
  description?: string; // CommonMark description from the spec's top-level `tags`
  operations: ApiOperation[];
}

// Display name and URL slug for the known tags. The spec's top-level `tags`
// array is empty, so tags are derived from operations; unknown tags fall back
// to their raw name and a lowercased slug.
const TAG_DISPLAY: Record<string, { title: string; slug: string }> = {
  Contacts: { title: "Contacts", slug: "contacts" },
  Segment: { title: "Segments", slug: "segments" },
  Forms: { title: "Forms", slug: "forms" },
  Campaign: { title: "Campaigns", slug: "campaigns" },
  Sender: { title: "Senders", slug: "senders" },
};

const HTTP_METHODS = ["get", "post", "put", "patch", "delete"];

let cachedPromise: Promise<any> | null = null;

export function fetchApiSchema(): Promise<any> {
  if (!cachedPromise) {
    cachedPromise = loadApiSchema();
  }
  return cachedPromise;
}

async function loadApiSchema(): Promise<any> {
  let res: Response;
  try {
    res = await fetch(OPENAPI_URL);
  } catch (err) {
    throw new Error(
      `Failed to fetch Keila OpenAPI schema from ${OPENAPI_URL}: ${err}`
    );
  }
  if (!res.ok) {
    throw new Error(
      `Failed to fetch Keila OpenAPI schema from ${OPENAPI_URL}: HTTP ${res.status}`
    );
  }
  const doc = await res.json();
  if (
    !doc ||
    typeof doc.openapi !== "string" ||
    !doc.openapi.startsWith("3.")
  ) {
    throw new Error(
      `Unexpected response from ${OPENAPI_URL}: not an OpenAPI 3.x document`
    );
  }
  return doc;
}

export async function getApiTags(): Promise<ApiTag[]> {
  const doc = await fetchApiSchema();
  const byTag: Record<string, ApiOperation[]> = {};

  // Descriptions from the spec's top-level `tags` array, keyed by raw tag name.
  // This array may be empty, in which case tags carry no description.
  const tagDescriptions: Record<string, string> = {};
  for (const t of doc.tags || []) {
    if (t?.name && t.description) tagDescriptions[t.name] = t.description;
  }

  for (const [path, methods] of Object.entries<any>(doc.paths || {})) {
    for (const method of HTTP_METHODS) {
      const op = methods[method];
      if (!op) continue;
      const tags = op.tags && op.tags.length ? op.tags : ["Other"];
      for (const tag of tags) {
        (byTag[tag] ||= []).push({
          method,
          path,
          summary: op.summary,
          description: op.description,
          operationId: op.operationId,
          parameters: op.parameters || [],
          requestBody: op.requestBody,
          responses: op.responses || {},
          tags,
        });
      }
    }
  }

  return Object.entries(byTag)
    .map(([name, operations]) => {
      const meta = TAG_DISPLAY[name];
      return {
        name,
        slug: meta?.slug ?? name.toLowerCase(),
        title: meta?.title ?? name,
        description: tagDescriptions[name],
        operations,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

// Resolve a possibly-$ref'd schema node against components.schemas.
// Returns the node unchanged if it is not a $ref.
export function resolveSchema(doc: any, schema: any): any {
  if (!schema || !schema.$ref) return schema;
  if (!schema.$ref.startsWith("#/components/schemas/")) return schema;
  const name = schema.$ref.slice("#/components/schemas/".length);
  return doc.components?.schemas?.[name] ?? {};
}

// Stable anchor id for an operation, e.g. GET /api/v1/contacts ->
// "get-api-v1-contacts". 
export function operationAnchor(op: { method: string; path: string }): string {
  return `${op.method}-${op.path}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
