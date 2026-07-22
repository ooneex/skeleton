import { PdfViewer } from "@module/design/components/pdf";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "PdfViewer",
  group: "Components",
  tags: [],
  component: PdfViewer,
  usage: [
    "**PdfViewer** renders a PDF document inline from a URL. It embeds `@react-pdf-viewer` with its own `pdf.js` worker, fits each page to the container width, scrolls smoothly through the document, and — with `toolbar` enabled — floats a control bar for search, zoom, page navigation, fullscreen, and single/dual page view. If the file cannot be loaded it swaps in an `Empty` state instead of failing silently.",
    "",
    "**How to use it** — give it a `src` pointing at a reachable PDF URL and a sized container: the viewer fills its parent (`h-full w-full`), so wrap it in an element with a real height or pass a `className` that sets one, otherwise it collapses to nothing. Set `toolbar` to show the floating controls, `initialPage` to open on a specific page (zero-based), or drive the visible page reactively with the `page` prop (one-based). Pass `onTextSelect` to capture highlighted text and its page number, and `locale` to translate the built-in UI.",
    "",
    "**When to use it** — to read or reference a document in place without leaving the app: contracts, invoices, reports, manuals, generated exports. It suits flows where the PDF is content the user needs to inspect, search, or quote from.",
    "",
    "**When not to use it** — do not use it as a thumbnail or a download affordance (link to the file or render a preview image instead), and avoid it for very large or many simultaneous documents where the worker and rendering cost hurt the page — lazy-load or paginate those instead.",
  ].join("\n"),
  props: [
    {
      name: "src",
      control: "text",
      default: "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
    },
    {
      name: "className",
      control: "text",
      default: "h-[600px] w-full max-w-2xl",
    },
    {
      name: "toolbar",
      control: "boolean",
      default: true,
    },
    {
      name: "initialPage",
      control: "number",
      default: 0,
    },
    {
      name: "page",
      control: "number",
      default: 1,
    },
    {
      name: "onTextSelect",
      callback: () => {},
    },
  ],
} satisfies Meta<typeof PdfViewer>;
