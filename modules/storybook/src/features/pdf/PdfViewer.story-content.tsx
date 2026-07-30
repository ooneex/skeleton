import { PdfViewer } from "@module/design/components/pdf";
import type { ComponentProps } from "react";

export type PdfViewerStoryPropsType = ComponentProps<typeof PdfViewer>;

export const PdfViewerStoryContent = (props: PdfViewerStoryPropsType) => <PdfViewer {...props} />;

PdfViewerStoryContent.displayName = "PdfViewer";
