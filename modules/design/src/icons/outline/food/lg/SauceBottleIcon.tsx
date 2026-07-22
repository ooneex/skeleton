import type { SVGProps } from "react";

export const SauceBottleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13 38H35" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M13 29.5L14.1555 29.0273C20.4647 26.4462 27.5353 26.4462 33.8445 29.0273L35 29.5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M13 20V41C13 43.2091 14.7909 45 17 45H31C33.2091 45 35 43.2091 35 41V20H13Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M20.5 9H16C14.3431 9 13 10.3431 13 12L13 15H35L35 12C35 10.3431 33.6569 9 32 9H27.5L26 3H22L20.5 9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
