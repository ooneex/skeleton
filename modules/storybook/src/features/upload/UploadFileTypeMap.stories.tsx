import { FILE_TYPE_MAP } from "@module/design/components/upload/fileTypes";
import type { MetaType } from "../../shared/story";

const FileTypeMapPreview = () => {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {Object.entries(FILE_TYPE_MAP).map(([key, value]) => (
        <div key={key} className="rounded border border-border p-4">
          <div className="mb-2 flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold">{value.label}</h3>
            <code className="rounded bg-muted px-2 py-0.5 text-xs uppercase">{key}</code>
          </div>
          <div className="grid gap-2 text-sm text-muted-foreground">
            <div>
              <p className="font-medium text-foreground">Extensions</p>
              <p>{value.extensions.join(", ")}</p>
            </div>
            <div>
              <p className="font-medium text-foreground">MIME types</p>
              <p>{value.mimeTypes.join(", ")}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

FileTypeMapPreview.displayName = "FILE_TYPE_MAP";

export const meta = {
  title: "Upload.FILE_TYPE_MAP",
  group: "Components",
  tags: [],
  component: FileTypeMapPreview,
  usage: [
    "**FILE_TYPE_MAP** is the upload module's canonical lookup table for accepted file groups. Each entry defines the user-facing label together with the allowed extensions and MIME types that the `FileUpload` family validates against.",
    "",
    "**How to use it** — reference it when you need to configure uploader affordances or backend validation to the same contract. The preview lays out every supported bucket so designers and developers can confirm which file families the upload surface recognises without reading the source file directly.",
    "",
    "**When to use it** — while designing or implementing upload flows that need to communicate allowed file formats clearly and consistently.",
    "",
    "**When not to use it** — do not treat it as a visual end-user component on a production screen; it is documentation and shared configuration, not the actual upload UI.",
  ].join("\n"),
} satisfies MetaType<typeof FileTypeMapPreview>;
