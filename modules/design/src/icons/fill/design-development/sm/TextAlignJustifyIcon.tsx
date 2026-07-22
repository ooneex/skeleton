import type { SVGProps } from "react";

export const TextAlignJustifyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M22 16L2 16V14L22 14V16Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 2H2V4H22V2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 20H2V22H22V20Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 8H2V10H22V8Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
