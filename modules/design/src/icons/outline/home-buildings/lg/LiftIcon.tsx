import type { SVGProps } from "react";

export const LiftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M29 5H4V43H29V5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M16.5 5V43" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 36.8333L43.25 32.5H36.75L40 36.8333Z"
        fill="currentColor"
        data-color="color-2"
        data-stroke="none"
        data-cap="butt"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 11.1667L43.25 15.5H36.75L40 11.1667Z"
        fill="currentColor"
        data-color="color-2"
        data-stroke="none"
        data-cap="butt"
      />
      <path
        d="M40 20C43.3137 20 46 17.3137 46 14C46 10.6863 43.3137 8 40 8C36.6863 8 34 10.6863 34 14C34 17.3137 36.6863 20 40 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M40 28C43.3137 28 46 30.6863 46 34C46 37.3137 43.3137 40 40 40C36.6863 40 34 37.3137 34 34C34 30.6863 36.6863 28 40 28Z"
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
