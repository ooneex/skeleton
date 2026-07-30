/** Render an arbitrary callback argument as a short, readable string. */
export const formatArg = (value: unknown): string => {
  if (typeof value === "string") {
    return value;
  }
  if (value === null || value === undefined) {
    return String(value);
  }
  if (typeof value === "function") {
    return `[Function ${value.name || "anonymous"}]`;
  }
  if (typeof value === "object") {
    if (typeof Event !== "undefined" && value instanceof Event) {
      return `[${value.constructor.name} ${value.type}]`;
    }
    if ("nativeEvent" in value && "type" in value) {
      return `[SyntheticEvent ${String((value as { type: unknown }).type)}]`;
    }
  }
  try {
    const seen = new WeakSet();
    const json = JSON.stringify(value, (_key, val) => {
      if (typeof val === "object" && val !== null) {
        if (seen.has(val)) {
          return "[Circular]";
        }
        seen.add(val);
      }
      return val;
    });
    if (json !== undefined) {
      return json;
    }
  } catch {
    // fall through to a readable label below
  }
  return Object.prototype.toString.call(value);
};
