/** Pretty-print a value the way the editors and viewers show it. */
export const formatJson = (value: unknown): string => {
  if (value === undefined) {
    return "";
  }
  if (typeof value === "string") {
    return value;
  }
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
};

/** Whether a string is JSON the API would accept. Empty text is valid — it means "no body". */
export const isValidJson = (value: string): boolean => {
  if (value.trim() === "") {
    return true;
  }
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
};

/** Copy text to the clipboard, reporting whether it landed. */
export const copyToClipboard = async (value: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
};

/** Offer a value as a download, used for the OpenAPI export. */
export const downloadJson = (fileName: string, value: unknown): void => {
  const blob = new Blob([formatJson(value)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  URL.revokeObjectURL(url);
};
