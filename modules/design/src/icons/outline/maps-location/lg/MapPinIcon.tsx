import type { SVGProps } from "react";

export const MapPinIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M31 21.633V12V13" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M17 5V36" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M26 40.5L17 36L3 41V10L17 5L31 12L45 7V22.2309"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M37.5 45C42.447 41.6031 46 37.7364 46 33.2051C46 28.6738 42.1941 25 37.5 25C32.8059 25 29 28.6738 29 33.2051C29 37.7364 32.553 41.6031 37.5 45Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M37.5 35C38.3284 35 39 34.3284 39 33.5C39 32.6716 38.3284 32 37.5 32C36.6716 32 36 32.6716 36 33.5C36 34.3284 36.6716 35 37.5 35Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
      />
    </svg>
  );
};
