import type { SVGProps } from "react";

export const CylinderAxisIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M29.9999 29L25.5 25.5L26 25.8889"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M2 29L6.49992 25.5L5.99992 25.8889"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M26 11V24C26 26.7614 21.5228 29 16 29C10.4772 29 6 26.7614 6 24V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16 6.00012V1.00012"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 16C21.5228 16 26 13.7614 26 11C26 8.23858 21.5228 6 16 6C10.4772 6 6 8.23858 6 11C6 13.7614 10.4772 16 16 16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
