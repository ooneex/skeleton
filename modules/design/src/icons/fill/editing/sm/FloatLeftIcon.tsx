import type { SVGProps } from "react";

export const FloatLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M22 16H12V14L22 14V16Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 2H2V4H22V2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 22L2 22V20L22 20V22Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 8H12V10H22V8Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 10C2 8.89543 2.89543 8 4 8H8C9.10457 8 10 8.89543 10 10V14C10 15.1046 9.10457 16 8 16H4C2.89543 16 2 15.1046 2 14V10Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
