import type { SVGProps } from "react";

export const CursorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5.49995 5.50001L22 9.49993L17.6641 13.893L26.9999 23.2288L23.2286 27L13.8929 17.6642L9.4999 22L5.49995 5.50001Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
