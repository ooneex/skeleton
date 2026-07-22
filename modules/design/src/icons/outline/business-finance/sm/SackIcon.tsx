import type { SVGProps } from "react";

export const SackIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14.5 10.5L12 8.00003L9.5 10.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12 23C6.47715 23 2 21.3097 2 16.7576C2 13.4468 4.13915 9.31083 7.55556 7H16.4444C19.8608 9.31083 22 13.4468 22 16.7576C22 21.3097 17.5228 23 12 23Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M7.5 6.99997L5.5 2.5L8.5 1.50003L12 3.5L15.5 1.50003L18.5 2.5L16.5 6.99997"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
    </svg>
  );
};
