import type { SVGProps } from "react";

export const TicketIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M3 27L29 27L29 21L28.7873 20.9468C26.5615 20.3904 25 18.3905 25 16.0961L25 15.8995C25 13.5498 26.6361 11.5171 28.9315 11.015L29 11L29 5L3 5L3 11L3.55168 11.1238C5.83318 11.636 7.45454 13.6617 7.45454 16C7.45454 18.3383 5.83318 20.364 3.55168 20.8762L3 21L3 27Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
