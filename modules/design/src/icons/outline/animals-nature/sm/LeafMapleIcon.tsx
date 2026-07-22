import type { SVGProps } from "react";

export const LeafMapleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M2 22L7.5 16.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22 18L20 16L21 14L16 13L22 8L20 7L21 3L17 4L16 2L11 8L10 3L8 4L6 2L5 5H3L5 11L3 13L8 16L11 21L13 19L19 21V19L22 18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
    </svg>
  );
};
