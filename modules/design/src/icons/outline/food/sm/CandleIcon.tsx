import type { SVGProps } from "react";

export const CandleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 22L9 10H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M5 21L5.70711 21.7071C5.89464 21.8946 6.149 22 6.41421 22H17.5858C17.851 22 18.1054 21.8946 18.2929 21.7071L19 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12 8C13.3808 8 14.5 6.95525 14.5 5.66638C14.5 4 12 2 12 2C12 2 9.5 4 9.5 5.66638C9.5 6.95438 10.6192 8 12 8Z"
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
