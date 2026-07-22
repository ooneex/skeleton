import type { SVGProps } from "react";

export const CropIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1L10 10H8L8 1L10 1Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 8L24 8L24 24H22L22 10L1 10L1 8Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 12L10 22L31 22L31 24L8 24L8 12H10Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M24 26V31H22V26H24Z" fill="currentColor" />
    </svg>
  );
};
