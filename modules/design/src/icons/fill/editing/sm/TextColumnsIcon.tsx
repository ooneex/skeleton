import type { SVGProps } from "react";

export const TextColumnsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M11 16L2 16V14L11 14V16Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 16L13 16V14L22 14V16Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M11 2H2V4H11V2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 2H13V4H22V2Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M11 20H2V22H11V20Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 20H13V22H22V20Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M11 8H2V10H11V8Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 8H13V10H22V8Z" fill="currentColor" />
    </svg>
  );
};
