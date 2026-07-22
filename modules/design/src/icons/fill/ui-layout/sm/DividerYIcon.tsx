import type { SVGProps } from "react";

export const DividerYIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 13L23 13L23 11L1 11L1 13Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 1H20V9H4V1Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 15H20V23H4V15Z" fill="currentColor" />
    </svg>
  );
};
