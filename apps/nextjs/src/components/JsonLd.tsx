type JsonLdNode = Record<string, unknown>;
type JsonLdValue = JsonLdNode | JsonLdNode[];

const SCHEMA_CONTEXT = "https://schema.org";

function normalizeJsonLd(data: JsonLdValue): JsonLdNode {
  if (!Array.isArray(data)) {
    return data;
  }

  // Some JSON-LD consumers choke on top-level arrays; emit a single graph instead.
  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": data.map((entry) => {
      if (entry["@context"] !== SCHEMA_CONTEXT) {
        return entry;
      }

      const rest = { ...entry };
      delete rest["@context"];
      return rest;
    }),
  };
}

export function JsonLd({ data }: { data: JsonLdValue }) {
  const normalizedData = normalizeJsonLd(data);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(normalizedData) }}
    />
  );
}
