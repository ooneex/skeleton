import type { SVGProps } from "react";

export const HorseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9 29.5C10.3333 24.1667 17 23 17 17.6667V11C17 12.4145 16.7714 13.4377 15.7712 14.4379C14.771 15.4381 13.4145 16 12 16L5.99999 20L3.5 17.5L10.5 6.50002V2.5C13.6507 2.49461 16.9179 3.45484 19.6786 4.97315C22.4393 6.49146 24.77 8.68496 26.4527 11.3486C28.1355 14.0123 29.1154 17.0591 29.3009 20.2043C29.4864 23.3495 28.858 26.6571 27.5 29.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M11 12C11.5523 12 12 11.5523 12 11C12 10.4477 11.5523 10 11 10C10.4477 10 10 10.4477 10 11C10 11.5523 10.4477 12 11 12Z"
        fill="currentColor"
        data-color="color-2"
        data-stroke="none"
        data-cap="butt"
      />
    </svg>
  );
};
