import type { SVGProps } from "react";

export const GraduationCapIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M6 19.5V19.5C12.0042 23.703 19.9958 23.703 26 19.5V19.5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M6 13.0638L6 24.3333L6.63276 24.6919C12.4435 27.9847 19.5565 27.9847 25.3672 24.6919L26 24.3333V13.0638"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M29.8835 11L16 18.5L2.13355 11L16 3.5L29.8835 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M30 16V24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
