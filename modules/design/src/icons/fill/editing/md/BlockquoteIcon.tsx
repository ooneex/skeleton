import type { SVGProps } from "react";

export const BlockquoteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M5 19V29H3V19H5Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 11L30 11L30 13L2 13L2 11Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 3H30V5H2V3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M9 19H30V21H9V19Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M9 27L30 27L30 29L9 29L9 27Z" fill="currentColor" />
    </svg>
  );
};
