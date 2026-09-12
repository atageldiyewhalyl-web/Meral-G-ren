/**
 * Emits a JSON-LD graph into the page.
 *
 * Callers build the graph with the helpers in `@/lib/schema`, so the shape of
 * the structured data lives next to the data it describes rather than being
 * spread across components.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
