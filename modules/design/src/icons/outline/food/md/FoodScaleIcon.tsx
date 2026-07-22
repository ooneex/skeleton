import type { SVGProps } from "react";

export const FoodScaleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M17 24H16V21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M16 8V12" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M5 29H27V23C27 16.9249 22.0751 12 16 12C9.92487 12 5 16.9249 5 23V29Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M24 8H8C5.79086 8 4 6.20914 4 4V3H28V4C28 6.20914 26.2091 8 24 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 17C12.6863 17 10 19.6863 10 23V24H22V23C22 19.6863 19.3137 17 16 17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
