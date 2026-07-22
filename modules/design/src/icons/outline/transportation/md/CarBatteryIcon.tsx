import type { SVGProps } from "react";

export const CarBatteryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M31 9H30" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M2 9H1" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M30 23.5V14.5451C30 13.5982 29.465 12.7325 28.618 12.309L27 11.5L25.5939 6.22701C25.2437 4.91375 24.0543 4 22.6952 4H9.30483C7.94568 4 6.75633 4.91375 6.40613 6.22701L5 11.5L3.38197 12.309C2.53501 12.7325 2 13.5982 2 14.5451V23.5C2 24.3284 2.67157 25 3.5 25H6.5C7.32843 25 8 24.3284 8 23.5V22H24V23.5C24 24.3284 24.6716 25 25.5 25H28.5C29.3284 25 30 24.3284 30 23.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M15.8437 8L13.5 13H16H18.5L16.1562 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22 31L22 27L10 27L10 31L22 31Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24.5 17.5L27 17.5L27 15L22 15C22 16.3807 23.1193 17.5 24.5 17.5Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M7.5 17.5L5 17.5L5 15L10 15C10 16.3807 8.88071 17.5 7.5 17.5Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
