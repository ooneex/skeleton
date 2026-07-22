import type { SVGProps } from "react";

export const DrinkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M6 2H10L12 13H12.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M6 13H18" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M18.0134 9H18.5C20.433 9 22 7.433 22 5.5C22 3.567 20.433 2 18.5 2C16.567 2 15 3.567 15 5.5V5.97844"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M6 6V20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20V6H6Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
