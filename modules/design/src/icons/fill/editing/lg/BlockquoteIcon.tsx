import type { SVGProps } from "react";

export const BlockquoteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M44 40.5H14V43.5H44V40.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M44 28.5H14V31.5H44V28.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7 28.5V43.5H4V28.5H7Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M44 16.5H4V19.5H44V16.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M44 4.5H4V7.5H44V4.5Z" fill="currentColor" />
    </svg>
  );
};
