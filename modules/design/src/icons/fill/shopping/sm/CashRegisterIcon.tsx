import type { SVGProps } from "react";

export const CashRegisterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M21 12H3V10H21V12Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M20 0V6H18V0H20Z" fill="currentColor" data-color="color-2" />
      <path
        d="M4 11.1623V4H2V10.8377L0 16.8377V19C0 20.6569 1.34315 22 3 22H21C22.6569 22 24 20.6569 24 19V16.8377L22 10.8377V4H16V6H20V11.1623L21.9459 17H2.05409L4 11.1623Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 2L16 2L16 -2.62268e-07L22 5.96046e-08L22 2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 1L13 5L11 5L7 5L7 1L13 1Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 6H14V8H6V6Z" fill="currentColor" />
    </svg>
  );
};
