const extractTweetId = (value: unknown): string | null => {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;

  // Supports direct ids and full tweet URLs.
  const idMatch = trimmed.match(/(\d{8,})/);
  return idMatch?.[1] || null;
};

const normalizeBulkTweetIds = (rawValue: unknown): string[] => {
  if (typeof rawValue !== "string") return [];
  const raw = rawValue.trim();
  if (!raw) return [];

  // Supports JSON array input: ["123", "456"] or [{ "tweetId": "123" }]
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      const fromJson = parsed
        .map((entry) => {
          if (typeof entry === "string") return extractTweetId(entry);
          if (entry && typeof entry === "object") {
            const maybe = entry as { tweetId?: unknown; id?: unknown; url?: unknown };
            return (
              extractTweetId(maybe.tweetId) ||
              extractTweetId(maybe.id) ||
              extractTweetId(maybe.url)
            );
          }
          return null;
        })
        .filter((id): id is string => Boolean(id));

      return Array.from(new Set(fromJson));
    }
  } catch {
    // Non-JSON input is treated as delimiter-separated ids/urls below.
  }

  // Supports comma/newline/space/semicolon separated ids and URLs.
  const tokens = raw
    .split(/[\s,;\n\r\t]+/)
    .map((token) => extractTweetId(token))
    .filter((id): id is string => Boolean(id));

  return Array.from(new Set(tokens));
};

const applyBulkItems = (data: Record<string, unknown> | undefined) => {
  if (!data) return;
  const normalizedIds = normalizeBulkTweetIds(data.bulkTweetIds);
  if (!normalizedIds.length) return;
  data.items = normalizedIds.map((tweetId) => ({ tweetId }));
};

export default {
  beforeCreate(event: { params: { data?: Record<string, unknown> } }) {
    applyBulkItems(event?.params?.data);
  },

  beforeUpdate(event: { params: { data?: Record<string, unknown> } }) {
    applyBulkItems(event?.params?.data);
  },
};
