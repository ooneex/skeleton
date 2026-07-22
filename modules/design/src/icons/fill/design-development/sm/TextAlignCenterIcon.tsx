import type { SVGProps } from "react";

export const TextAlignCenterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M22 16L2 16V14L22 14V16Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 2H2V4H22V2Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 20H7.5V22H17.5V20Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M17.5 8H7.5V10H17.5V8Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
