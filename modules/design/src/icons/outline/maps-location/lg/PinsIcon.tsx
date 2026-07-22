import type { SVGProps } from "react";

export const PinsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="19" cy="19" r="5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M3 19.2911C3 32.5082 19 45 19 45C19 45 35 32.5393 35 19.2911C35 8.90479 26.7993 3 19 3C11.2007 3 3 8.90479 3 19.2911Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M27.6426 43.8641C28.4861 44.5988 29 45 29 45C29 45 45 32.5393 45 19.2911C45 10.9099 39.66 5.4469 33.5 3.64996"
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
