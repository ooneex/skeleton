import type { SVGProps } from "react";

export const TextStrikethroughIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M23.9214 24H22.3534C11.7716 24 9.26695 8.22447 19.539 5.44922C25.5545 3.82399 30.9251 6.75847 34 11.8353"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M13 36.1647C16.0749 41.2415 21.4455 44.176 27.461 42.5508C33.9419 40.7998 35.3368 33.8739 32.8261 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M3 24H45"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
