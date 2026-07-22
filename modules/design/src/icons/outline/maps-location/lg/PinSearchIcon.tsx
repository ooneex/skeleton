import type { SVGProps } from "react";

export const PinSearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 45C24 45 8 32.5082 8 19.2911C8 8.90479 16.2007 3 24 3C31.7993 3 40 8.90479 40 19.2911C40 20.7078 39.817 22.1156 39.4902 23.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <circle cx="24" cy="19" r="5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M33.5 42C37.6421 42 41 38.6421 41 34.5C41 30.3579 37.6421 27 33.5 27C29.3579 27 26 30.3579 26 34.5C26 38.6421 29.3579 42 33.5 42Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M43.5 44.5L39 40L39.5 40.5"
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
