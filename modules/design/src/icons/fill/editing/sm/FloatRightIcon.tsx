import type { SVGProps } from "react";

export const FloatRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 16H12V14L2 14L2 16Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 2H22V4H2V2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 22L22 22V20L2 20L2 22Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 8H12V10H2V8Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 10C14 8.89543 14.8954 8 16 8H20C21.1046 8 22 8.89543 22 10V14C22 15.1046 21.1046 16 20 16H16C14.8954 16 14 15.1046 14 14V10Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
