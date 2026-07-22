import type { SVGProps } from "react";

export const ListTreeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 4H12V6H4V4Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 12H12V14H4V12Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 1V20H13V22H3V1H5Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M11 2H21V8H11V2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M11 10H21V16H11V10Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M11 18H21V24H11V18Z" fill="currentColor" />
    </svg>
  );
};
