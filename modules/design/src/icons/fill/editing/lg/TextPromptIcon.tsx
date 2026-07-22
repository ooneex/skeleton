import type { SVGProps } from "react";

export const TextPromptIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35 24.6404L38 32L45.3596 35L38 38L35 45.3596L32 38L24.6404 35L32 32L35 24.6404Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 16.5H44V19.5H4V16.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 4.5H44V7.5H4V4.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 28.5H21V31.5H4V28.5Z" fill="currentColor" />
    </svg>
  );
};
