import { Editor } from "@module/design/components/editor";
import type { Meta } from "../../shared/story";

const sampleContent = [
  "<h2>Welcome to the editor</h2>",
  "<p>This is a <strong>rich text</strong> editor built on Tiptap. Select any text to reveal the floating toolbar, or type <em>/</em> to open the slash menu.</p>",
  "<ul><li>Bullet and ordered lists</li><li>Headings, quotes, and task lists</li><li>Links, highlights, and media</li></ul>",
].join("");

export const meta = {
  title: "Editor",
  group: "Components",
  tags: [],
  component: Editor,
  usage: [
    "**Editor** is a WYSIWYG rich-text editor built on Tiptap. It renders an editable document area and layers on the productivity affordances a writer expects: a `FloatingToolbar` that appears over a text selection, a `/` slash menu for inserting blocks, and imperative dialogs for links, colors, and YouTube embeds. Out of the box it supports headings, bold/italic/underline/strike, sub/superscript, text color and highlight, blockquotes, bullet/ordered/task lists, horizontal rules, images, links, and Markdown paste — all serialized to HTML.",
    "",
    "**How to use it** — drop `<Editor />` where you need a body-copy field and seed it with `content` (an HTML string). Read edits through `onContentChange` (HTML) or `onSelectionChange`, and drive the document imperatively via the `ref` (`getContent`, `setContent`, `insertContent`, `focus`, …). Toggle capabilities with the `show*` flags — hide the toolbar for a chromeless field, disable the slash menu for short inputs, or switch on `plainText` to strip every mark and keep a single-paragraph plain field. Set `editable={false}` to render the content read-only. Constrain its footprint with `className`, since the content area grows to fill its container.",
    "",
    "**When to use it** — for long-form, formatted authoring: article and page bodies, comment and description fields, knowledge-base entries, anywhere the user composes structured prose and expects formatting shortcuts and paste-from-Markdown to just work.",
    "",
    "**When not to use it** — do not use it for a single-line text value (use an `Input`), for values that must stay unformatted plain strings unless you pass `plainText`, or for code entry (there is no syntax-highlighted code block). Render your own read-only prose renderer for static content that is never edited rather than mounting a full editor instance.",
  ].join("\n"),
  props: [
    {
      name: "content",
      control: "text",
      default: sampleContent,
    },
    {
      name: "placeholder",
      control: "text",
      default: "Type something or '/' to start",
    },
    {
      name: "className",
      control: "text",
      default: "min-h-48 w-full max-w-2xl rounded border border-border p-4 text-left",
    },
    {
      name: "editable",
      control: "boolean",
      default: true,
    },
    {
      name: "showToolbar",
      control: "boolean",
      default: true,
    },
    {
      name: "showSlashMenu",
      control: "boolean",
      default: true,
    },
    {
      name: "showHeadings",
      control: "boolean",
      default: true,
    },
    {
      name: "showHistory",
      control: "boolean",
      default: true,
    },
    {
      name: "showMedia",
      control: "boolean",
      default: true,
    },
    {
      name: "plainText",
      control: "boolean",
      default: false,
    },
    {
      name: "onContentChange",
      callback: () => {},
    },
    {
      name: "onSubmit",
      callback: () => {},
    },
  ],
} satisfies Meta<typeof Editor>;
