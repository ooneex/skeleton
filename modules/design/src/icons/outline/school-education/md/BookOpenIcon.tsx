import type { SVGProps } from "react";

export const BookOpenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <line
        x1="16"
        y1="6"
        x2="16"
        y2="28"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <path
        d="m16,28c4.667-2.667,9.333-2.667,14,0h0V6c-4.667-2.667-9.333-2.667-14,0-4.667-2.667-9.333-2.667-14,0v22h0c4.667-2.667,9.333-2.667,14,0Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
