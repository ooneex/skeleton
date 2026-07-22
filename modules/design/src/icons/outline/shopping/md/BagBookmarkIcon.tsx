import type { SVGProps } from "react";

export const BagBookmarkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M11 13V6C11 3.239 13.239 1 16 1C18.761 1 21 3.239 21 6V13"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M25.9999 13V9H5.99994V16L3.84792 25.3254C3.41411 27.2053 4.84184 29 6.77109 29H13"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M27 17H19C17.8954 17 17 17.8954 17 19V30L23 25.6667L29 30V19C29 17.8954 28.1046 17 27 17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
