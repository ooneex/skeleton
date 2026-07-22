import type { SVGProps } from "react";

export const EquationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M29 4H18L10.5 27.5L6 16H3"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M19 29V29C19.6321 29 20.2299 28.7127 20.6247 28.2191L27.3753 19.7809C27.7701 19.2873 28.3679 19 29 19V19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M28 29V29C27.1793 29 26.4254 28.5477 26.0392 27.8235L21.9607 20.1765C21.5745 19.4523 20.8206 19 19.9999 19V19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
