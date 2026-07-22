import type { SVGProps } from "react";

export const GolfBagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M27 26V8.37247C27 6.98196 27.9555 5.77369 29.3086 5.45323L41.253 2.6243C43.4288 2.10898 45.3833 4.06941 44.8615 6.24366L43.552 11.7001C43.2282 13.049 42.022 14 40.6348 14H32V26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M21 26V13.2305C21 11.8638 20.0762 10.6698 18.7532 10.3266L8.12149 7.56902C6.27434 7.08991 4.59309 8.77351 5.07478 10.62L6.41494 15.7573C6.75955 17.0783 7.95259 18 9.31779 18H16V26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M11 38V45"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M37 38V45"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M41 31H7V38H41V31Z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
