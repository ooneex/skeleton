import type { SVGProps } from "react";

export const BagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M22 15L22 7C22 3.68629 19.3137 1 16 1V1C12.6863 1 10 3.68629 10 7L10 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M29 10H3V23C3 26.3137 5.68629 29 9 29H23C26.3137 29 29 26.3137 29 23V10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M11 24V20L21 20V24"
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
