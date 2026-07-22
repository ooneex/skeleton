import type { SVGProps } from "react";

export const TextToImageIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 22L18 14.5L22 18.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M20 9L11 9C9.89543 9 9 9.89543 9 11L9 20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M13.5 14C13.7761 14 14 13.7761 14 13.5C14 13.2239 13.7761 13 13.5 13C13.2239 13 13 13.2239 13 13.5C13 13.7761 13.2239 14 13.5 14Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path d="M5 11V2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M1 2H9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M3.25 15.75L2.5 14L1.75 15.75L0 16.5L1.75 17.25L2.5 19L3.25 17.25L5 16.5L3.25 15.75Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M4.95 21.05L4.5 20L4.05 21.05L3 21.5L4.05 21.95L4.5 23L4.95 21.95L6 21.5L4.95 21.05Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M18.9 2.1L18 0L17.1 2.1L15 3L17.1 3.9L18 6L18.9 3.9L21 3L18.9 2.1Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
