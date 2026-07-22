import type { SVGProps } from "react";

export const NecktieIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14 13.5L13.5 9.5M18.5 9.5L18 13.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M14 13.5L10.5 26.5L16 32L21.5 26.5L18 13.5H14Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 9.00001L22 10.5L25 4.00001L24.5289 3.79064C19.099 1.37736 12.901 1.37736 7.47109 3.79064L7 4.00001L10 10.5L16 9.00001ZM16 9.00001L7.33984 4.18882M16 9.00001L24.6602 4.18882"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
