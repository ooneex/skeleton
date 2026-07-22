import type { SVGProps } from "react";

export const MusicIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18 20L41 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M18 38V12L41 6V32"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M11.5 44C15.0899 44 18 41.3137 18 38C18 34.6863 15.0899 32 11.5 32C7.91015 32 5 34.6863 5 38C5 41.3137 7.91015 44 11.5 44Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M34.5 38C38.0899 38 41 35.3137 41 32C41 28.6863 38.0899 26 34.5 26C30.9101 26 28 28.6863 28 32C28 35.3137 30.9101 38 34.5 38Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
