import type { SVGProps } from "react";

export const SinkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M19 38.8559V45H29V38.8559" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M24 13H29V15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M24 20V7C24 4.79086 22.2091 3 20 3V3C17.7909 3 16 4.79086 16 7V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M20.8972 39L27.1028 39C34.778 39 41 32.778 41 25.1028C41 24.7485 41.2411 24.4397 41.5848 24.3538L41.6667 24.3333C42.4503 24.1374 43 23.4334 43 22.6256L43 22C43 20.8954 42.1046 20 41 20L7 20C5.89543 20 5 20.8954 5 22L5 22.6256C5 23.4334 5.54972 24.1374 6.33333 24.3333L6.41519 24.3538C6.75888 24.4397 7 24.7485 7 25.1028C7 32.778 13.222 39 20.8972 39Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M15 10H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
