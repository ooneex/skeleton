import type { SVGProps } from "react";

export const SnowGlobeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 25V21" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M3 25H29" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M3 29V16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16V29H3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M11.3333 21L16 11L20.6667 21H11.3333Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M11 9L11.0094 9.00943" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 9L21.0094 9.00943" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M24 15L24.0094 15.0094" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M8 15L8.00943 15.0094" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
