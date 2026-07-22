import type { SVGProps } from "react";

export const NailPolishIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M18 8H30" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M18 18V5.5C18 4.11929 19.1193 3 20.5 3H27.5C28.8807 3 30 4.11929 30 5.5V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M31 45H17C14.2386 45 12 42.7614 12 40V23H36V40C36 42.7614 33.7614 45 31 45Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M17.5 29H24H30.5L28.6429 38H24H19.3571L17.5 29Z"
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
