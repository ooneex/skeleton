import type { SVGProps } from "react";

export const BoxIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16.6772 9.16431L12.4461 11.2772C12.1652 11.4175 11.8347 11.4177 11.5536 11.2778L7.32132 9.17072"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M3 11.7935V18L12 22.5L21 18V11.7935"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M21 7.00552L13 11L14 15L22.5 11L21 6L12 1.5L3 6L1.5 11L10 15L11 11L3 7.01921"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
