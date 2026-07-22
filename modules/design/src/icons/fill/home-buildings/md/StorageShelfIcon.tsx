import type { SVGProps } from "react";

export const StorageShelfIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M10 19H6V27L16 27L16 19H12V22H10V19Z" fill="currentColor" data-color="color-2" />
      <path d="M22 7H26V15L16 15L16 7H20V10H22V7Z" fill="currentColor" data-color="color-2" />
      <path d="M26 27L24 27L18 27L18 22L26 22L26 27Z" fill="currentColor" data-color="color-2" />
      <path d="M6 15L8 15L14 15L14 10L6 10L6 15Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M29.3333 16H2.66663V14H29.3333V16Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M29.3333 28H2.66663V26H29.3333V28Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 6C28 4.89543 27.1046 4 26 4L6 4C4.89543 4 4 4.89543 4 6L4 30L2 30L2 6C2 3.79086 3.79086 2 6 2L26 2C28.2091 2 30 3.79086 30 6L30 30L28 30L28 6Z"
        fill="currentColor"
      />
    </svg>
  );
};
