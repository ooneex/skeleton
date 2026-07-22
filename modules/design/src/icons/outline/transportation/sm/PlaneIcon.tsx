import type { SVGProps } from "react";

export const PlaneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5.82968 10L21 10C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14L15 14L10.5605 21.599L8 20.9129L10.5 14L5.40944 14C4.56421 14 3.81023 13.4687 3.52595 12.6727L1.5 7L3.57583 7L5.82968 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M13.129 6.99999L10.5 2.5L7.93948 3.18609L9.31875 6.99999"
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
