import type { SVGProps } from "react";

export const PinMinusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M36 45C40.9706 45 45 40.9706 45 36C45 31.0294 40.9706 27 36 27C31.0294 27 27 31.0294 27 36C27 40.9706 31.0294 45 36 45Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M32 36H40"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <circle cx="24" cy="19" r="5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M24 45C24 45 8 32.5082 8 19.2911C8 8.90479 16.2007 3 24 3C31.7993 3 40 8.90479 40 19.2911C40 20.368 39.8943 21.4398 39.7 22.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
