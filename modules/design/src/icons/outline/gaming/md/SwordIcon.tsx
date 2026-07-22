import type { SVGProps } from "react";

export const SwordIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M4.6718 23.9746L11 25" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M12.8527 12.1473L22 3.00001L29 2.99999L29 10L19.8527 19.1473"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M16.5 15.5L21.6854 10.3146" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M17.0598 26.2782L19.1811 24.1569L13.5243 18.5L7.86739 12.8431L5.74609 14.9645L7.86741 19.9142L2.58579 26.5858L4 28L5.41421 29.4142L12.11 24.1569L17.0598 26.2782Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
