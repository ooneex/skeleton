import type { ComponentType, ReactElement, ReactNode } from "react";
import { cloneElement, createElement, Fragment, isValidElement, useMemo, useState } from "react";
import { useShikiHighlighter } from "react-shiki/core";
import { useThemeScheme } from "../hooks/useTheme";
import { CodeIcon } from "../icons/outline/design-development/sm/CodeIcon";
import { CheckIcon } from "../icons/outline/ui-layout/sm/CheckIcon";
import { CopyIcon } from "../icons/outline/ui-layout/sm/CopyIcon";
import { EyeIcon } from "../icons/outline/ui-layout/sm/EyeIcon";
import type { LoadedVariantType, StoryGroupType } from "../story";
import { cn } from "../utils/cn";
import { Badge } from "./badge";
import { Breadcrumb } from "./breadcrumb";
import { Button } from "./button";
import { useCodeHighlighter } from "./codeHighlighter";
import { ThemeSwitcher } from "./theme";

type CanvasPropsType = {
  group: StoryGroupType;
  variant: LoadedVariantType;
  args: Record<string, unknown>;
};

type PreviewViewType = "design" | "code";

/** JSX attribute expression for a single prop, or `null` to omit it from the snippet. */
const formatAttribute = (name: string, value: unknown): string | null => {
  if (value === undefined) {
    return null;
  }
  if (typeof value === "string") {
    return value.includes('"') ? `${name}={${JSON.stringify(value)}}` : `${name}="${value}"`;
  }
  if (typeof value === "boolean") {
    return value ? name : `${name}={false}`;
  }
  if (typeof value === "number") {
    return `${name}={${value}}`;
  }
  if (typeof value === "function") {
    return `${name}={${value.name || "fn"}}`;
  }
  try {
    return `${name}={${JSON.stringify(value)}}`;
  } catch {
    return `${name}={/* … */}`;
  }
};

const INDENT = "  ";

/** True when the value is a React element (or an array containing one) — i.e. composed JSX to serialize. */
const isElementLike = (value: unknown): boolean =>
  isValidElement(value) || (Array.isArray(value) && value.some((item) => isValidElement(item)));

/** Flatten nested arrays and drop nullish/boolean nodes, keeping element and text children. */
const flattenNodes = (node: ReactNode): ReactNode[] => {
  if (Array.isArray(node)) {
    return node.flatMap(flattenNodes);
  }
  if (node === null || node === undefined || typeof node === "boolean") {
    return [];
  }
  return [node];
};

/** JSX tag name: host strings as-is, a `Fragment` as empty (`<>`), components by displayName then name. */
const tagName = (type: ReactElement["type"]): string => {
  if (typeof type === "string") {
    return type;
  }
  if (type === Fragment) {
    return "";
  }
  const named = type as { displayName?: string; name?: string };
  return named.displayName || named.name || "Component";
};

/**
 * Serialize a React node back into the JSX a developer would write for it — the real
 * composition currently rendered in the preview, indented, with each element's props as
 * attributes. Text children collapse onto one line; element children nest.
 */
const serializeJsx = (node: ReactNode, depth: number): string => {
  const pad = INDENT.repeat(depth);
  if (typeof node === "string") {
    const text = node.trim();
    return text ? pad + text : "";
  }
  if (typeof node === "number") {
    return pad + String(node);
  }
  if (!isValidElement(node)) {
    return "";
  }

  const element = node as ReactElement;
  const isFragment = element.type === Fragment;
  const name = tagName(element.type);
  const { children, ...rest } = (element.props ?? {}) as { children?: ReactNode } & Record<string, unknown>;
  const attributes = isFragment
    ? []
    : Object.entries(rest)
        .map(([key, value]) => formatAttribute(key, value))
        .filter((attribute): attribute is string => attribute !== null);
  const openName = `${name}${attributes.length > 0 ? ` ${attributes.join(" ")}` : ""}`;
  const closeTag = isFragment ? "</>" : `</${name}>`;
  const kids = flattenNodes(children);

  if (kids.length === 0) {
    return isFragment ? `${pad}<></>` : `${pad}<${openName} />`;
  }

  const openTag = isFragment ? "<>" : `<${openName}>`;
  const onlyChild = kids[0];
  if (kids.length === 1 && (typeof onlyChild === "string" || typeof onlyChild === "number")) {
    return `${pad}${openTag}${String(onlyChild).trim()}${closeTag}`;
  }

  const inner = kids
    .map((child) => serializeJsx(child, depth + 1))
    .filter((line) => line.length > 0)
    .join("\n");
  return `${pad}${openTag}\n${inner}\n${pad}${closeTag}`;
};

/** Render the current preview as a copy-pastable JSX snippet. */
const buildSnippet = (component: ComponentType<Record<string, unknown>>, args: Record<string, unknown>): string => {
  const { children, ...rest } = args;

  // Compound previews pass their composition as `children` — show that real JSX tree.
  if (isElementLike(children)) {
    return serializeJsx(children as ReactNode, 0);
  }

  // Atomic previews render the component tag with its props (and any text child).
  const name = component.displayName || component.name || "Component";
  const attributes = Object.entries(rest)
    .map(([key, value]) => formatAttribute(key, value))
    .filter((attribute): attribute is string => attribute !== null);

  const openTag = attributes.length > 0 ? `<${name}\n  ${attributes.join("\n  ")}\n` : `<${name}`;

  if (typeof children === "string" && children.length > 0) {
    return `${openTag}>\n  ${children}\n</${name}>`;
  }

  return attributes.length > 0 ? `${openTag}/>` : `${openTag} />`;
};

const codePanelClass =
  "flex-1 overflow-auto rounded-lg bg-muted p-4 font-mono text-xs [&_pre]:!bg-transparent [&_pre]:m-0";

/** Plain, unhighlighted snippet shown while the Shiki grammar is still loading. */
const CodeFallback = ({ code }: { code: string }) => (
  <pre className={cn(codePanelClass, "text-foreground")}>
    <code>{code}</code>
  </pre>
);

/** Syntax-highlighted snippet, following the active light/dark theme. */
const HighlightedCode = ({
  code,
  highlighter,
}: {
  code: string;
  highlighter: NonNullable<ReturnType<typeof useCodeHighlighter>>;
}) => {
  const scheme = useThemeScheme();
  const highlighted = useShikiHighlighter(code, "tsx", scheme === "dark" ? "github-dark" : "github-light", {
    highlighter,
  });

  return highlighted ? <div className={codePanelClass}>{highlighted}</div> : <CodeFallback code={code} />;
};

/** Copies the snippet to the clipboard, flipping to a check for confirmation. */
const CopyCodeButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="icon-xs"
      className="absolute top-2 right-2 shrink-0"
      onClick={copy}
      aria-label="Copy code"
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </Button>
  );
};

/** TypeScript code view: Shiki-highlighted once its grammar loads, plain text until then. */
const CodePreview = ({ code }: { code: string }) => {
  const highlighter = useCodeHighlighter();

  return (
    <div className="relative flex min-h-0 flex-1 flex-col">
      <CopyCodeButton code={code} />
      {highlighter ? <HighlightedCode code={code} highlighter={highlighter} /> : <CodeFallback code={code} />}
    </div>
  );
};

export const Canvas = ({ group, variant, args }: CanvasPropsType) => {
  const component = group.component as ComponentType<Record<string, unknown>>;
  const [view, setView] = useState<PreviewViewType>("design");
  // When the story passes an instance of the component itself as `children` (the compound
  // root story previews `<Avatar>…</Avatar>` directly), apply the remaining args — `size`
  // and friends — to that root instead of wrapping it in a second component. That way the
  // control resizes the visible avatar and the snippet reflects the selected prop.
  const { element: previewElement, snippet } = useMemo(() => {
    const { children, ...rest } = args;
    if (isValidElement(children) && children.type === component) {
      const root = cloneElement(children as ReactElement, rest);
      return { element: root, snippet: serializeJsx(root, 0) };
    }
    return { element: createElement(component, args), snippet: buildSnippet(component, args) };
  }, [component, args]);

  return (
    <section className="flex min-h-0 flex-1 flex-col">
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <div className="flex items-center gap-6 text-xs">
          <Breadcrumb>
            <Breadcrumb.List size="xs">
              <Breadcrumb.Item size="xs" className="font-medium text-foreground">
                {group.group}
              </Breadcrumb.Item>
              <Breadcrumb.Separator size="xs" />
              <Breadcrumb.Item size="xs">
                <Breadcrumb.Page>{variant.name}</Breadcrumb.Page>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb>
          <span className="flex gap-1">
            {group.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="inline-flex gap-0.5 rounded-md" data-slot="button-group">
            <Button
              variant={view === "design" ? "secondary" : "ghost"}
              size="icon-xs"
              aria-label="Design preview"
              aria-pressed={view === "design"}
              onClick={() => setView("design")}
            >
              <EyeIcon />
            </Button>
            <Button
              variant={view === "code" ? "secondary" : "ghost"}
              size="icon-xs"
              aria-label="Code preview"
              aria-pressed={view === "code"}
              onClick={() => setView("code")}
            >
              <CodeIcon />
            </Button>
          </div>
          <ThemeSwitcher />
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-auto p-2">
        {view === "design" ? (
          <div
            // `contain-layout` establishes a containing block for `position: fixed` descendants
            // (app shells like Sidebar render fixed to the viewport by design), so the preview
            // stays confined to this pane instead of escaping over the real Storybook UI.
            className={cn(
              "relative h-full flex flex-1 items-center justify-center overflow-hidden rounded-lg p-0 contain-layout",
            )}
          >
            {previewElement}
          </div>
        ) : (
          <CodePreview code={snippet} />
        )}
      </div>
    </section>
  );
};
