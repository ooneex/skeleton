import type { ReactElement, ReactNode } from "react";
import { cn } from "../utils/cn";

const INLINE = /\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`|\[(.+?)\]\((.+?)\)/g;

const renderInline = (text: string): ReactNode[] => {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (let match = INLINE.exec(text); match !== null; match = INLINE.exec(text)) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined) {
      nodes.push(<strong key={key++}>{match[1]}</strong>);
    } else if (match[2] !== undefined) {
      nodes.push(<em key={key++}>{match[2]}</em>);
    } else if (match[3] !== undefined) {
      nodes.push(
        <code key={key++} className="rounded bg-muted px-1 py-0.5 text-xs">
          {match[3]}
        </code>,
      );
    } else if (match[4] !== undefined) {
      nodes.push(
        <a
          key={key++}
          href={match[5]}
          className="text-sm text-primary underline underline-offset-2"
          target="_blank"
          rel="noreferrer"
        >
          {match[4]}
        </a>,
      );
    }

    lastIndex = INLINE.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
};

const headingClass = (level: number): string => {
  if (level <= 2) {
    return "text-sm font-semibold";
  }
  return "text-sm font-medium";
};

const parseBlocks = (content: string): ReactElement[] => {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactElement[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];
  let key = 0;

  const flushParagraph = (): void => {
    if (paragraph.length > 0) {
      blocks.push(
        <p key={key++} className="text-xs">
          {renderInline(paragraph.join(" "))}
        </p>,
      );
      paragraph = [];
    }
  };

  const flushList = (): void => {
    if (list.length > 0) {
      const items = list;
      blocks.push(
        <ul key={key++} className="list-disc pl-5 text-sm">
          {items.map((item, index) => (
            <li key={`${key}-${index}`} className="text-sm">
              {renderInline(item)}
            </li>
          ))}
        </ul>,
      );
      list = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trim();

    if (line === "") {
      flushParagraph();
      flushList();
      continue;
    }

    const heading = /^(#{1,6})\s+(.*)$/.exec(line);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1]?.length ?? 1;
      blocks.push(
        <p key={key++} className={headingClass(level)}>
          {renderInline(heading[2] ?? "")}
        </p>,
      );
      continue;
    }

    const bullet = /^[-*]\s+(.*)$/.exec(line);
    if (bullet) {
      flushParagraph();
      list.push(bullet[1] ?? "");
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();

  return blocks;
};

type MarkdownPropsType = {
  content: string;
  className?: string;
};

export const Markdown = ({ content, className }: MarkdownPropsType) => {
  const trimmed = content.trim();
  if (trimmed === "") {
    return null;
  }

  return (
    <div className={cn("flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground", className)}>
      {parseBlocks(trimmed)}
    </div>
  );
};
