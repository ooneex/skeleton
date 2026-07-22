import type { SVGProps } from "react";

export const SockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 6H18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M5.5 14.5L11 20.5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M8.99999 11V2H18V12.7121C18 13.5344 17.6624 14.3207 17.0662 14.8871L11.0409 20.6111C9.3703 22.1982 6.72283 22.1067 5.16576 20.4081C3.67513 18.782 3.72971 16.2703 5.28956 14.7104L8.99999 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
