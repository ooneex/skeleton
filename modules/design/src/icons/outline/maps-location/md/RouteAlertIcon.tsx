import type { SVGProps } from "react";

export const RouteAlertIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M28 16H31" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M1.00003 16H4.00003" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M16 14L16 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M10 24H7.9967C6.46655 24 5.50646 22.3451 6.26511 21.0161L14.2687 7.00536C15.0345 5.66488 16.9661 5.66488 17.7305 7.00536L25.7341 21.0161C26.4942 22.3451 25.5341 24 24.0025 24H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M15 24C15 24.5523 15.4477 25 16 25C16.5523 25 17 24.5523 17 24C17 23.4477 16.5523 23 16 23C15.4477 23 15 23.4477 15 24Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  );
};
