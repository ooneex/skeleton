import type { SVGProps } from "react";

export const LetterEIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M29 22.5V25.5H13V22.5H29Z" fill="currentColor" />
      <path d="M38 4V7H16V41H38V44H13V4H38Z" fill="currentColor" />
    </svg>
  );
};
