import type { SVGProps } from "react";

export const CropIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 1L8 8H6L6 1L8 1Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 6L18 6L18 18L16 18L16 8L1 8L1 6Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 10L8 16L23 16V18L6 18L6 10H8Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M18 20V23H16V20H18Z" fill="currentColor" />
    </svg>
  );
};
