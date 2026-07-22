import type { SVGProps } from "react";

export const MugIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M43 21V13H38V10H46V21C46 24.3137 43.3137 27 40 27H38V24H40C41.6568 24 43 22.6568 43 21Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39 38C39 41.3137 36.3137 44 33 44H13C9.68629 44 7 41.3137 7 38V20H39V38ZM28 31.8789L23 26.8789L18 31.8789L13 26.8789L10 29.8789V34.1211L13 31.1211L18 36.1211L23 31.1211L28 36.1211L33 31.1211L36 34.1211V29.8789L33 26.8789L28 31.8789Z"
        fill="currentColor"
      />
      <path d="M21.5 1L24.5 1V6H21.5V1Z" fill="currentColor" data-color="color-2" />
      <path d="M13 3H16V7H13V3Z" fill="currentColor" data-color="color-2" />
      <path d="M30 3H33V7H30V3Z" fill="currentColor" data-color="color-2" />
      <path d="M39 17H7V10H39V17Z" fill="currentColor" />
    </svg>
  );
};
