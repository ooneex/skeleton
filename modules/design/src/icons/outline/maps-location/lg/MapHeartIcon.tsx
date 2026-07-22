import type { SVGProps } from "react";

export const MapHeartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M31 23V12V13" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M17 5V36" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M22.3585 38.6792L17 36L3 41V10L17 5L31 12L45 7V24"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M36 45C38.218 44 46 38.458 46 33.378C46 30.408 43.588 28 40.616 28C38.656 28 37.192 29.228 36 30.606C34.81 29.226 33.344 28 31.384 28C28.41 28 26 30.408 26 33.378C26 38.458 33.782 44 36 45Z"
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
