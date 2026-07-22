import type { SVGProps } from "react";

export const CopyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect
        x="8"
        y="8"
        width="13"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M4 16H3.5C2.11929 16 1 14.8807 1 13.5V3.5C1 2.11929 2.11929 1 3.5 1H13.5C14.8807 1 16 2.11929 16 3.5V4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};
