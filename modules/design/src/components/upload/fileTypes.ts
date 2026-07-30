export type AcceptedFileType = "image" | "pdf" | "video" | "audio" | "document" | "spreadsheet" | "archive";

export const FILE_TYPE_MAP: Record<AcceptedFileType, { mimeTypes: string[]; extensions: string[]; label: string }> = {
  image: {
    mimeTypes: ["image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml"],
    extensions: [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"],
    label: "Images",
  },
  pdf: {
    mimeTypes: ["application/pdf"],
    extensions: [".pdf"],
    label: "PDF",
  },
  video: {
    mimeTypes: ["video/mp4", "video/webm", "video/ogg", "video/quicktime"],
    extensions: [".mp4", ".webm", ".ogg", ".mov"],
    label: "Videos",
  },
  audio: {
    mimeTypes: ["audio/mpeg", "audio/wav", "audio/ogg", "audio/webm"],
    extensions: [".mp3", ".wav", ".ogg", ".webm"],
    label: "Audio",
  },
  document: {
    mimeTypes: [
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ],
    extensions: [".doc", ".docx", ".txt"],
    label: "Documents",
  },
  spreadsheet: {
    mimeTypes: [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ],
    extensions: [".xls", ".xlsx", ".csv"],
    label: "Spreadsheets",
  },
  archive: {
    mimeTypes: ["application/zip", "application/x-rar-compressed", "application/x-7z-compressed"],
    extensions: [".zip", ".rar", ".7z"],
    label: "Archives",
  },
};
