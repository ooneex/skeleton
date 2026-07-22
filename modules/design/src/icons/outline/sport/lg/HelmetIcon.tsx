import type { SVGProps } from "react";

export const HelmetIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M34 46V41L34 42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M5.2259 23.021L21.8533 22.2067C23.5657 22.1229 25 23.4887 25 25.2031V32C25 36.9706 29.0294 41 34 41V41C38.9706 41 43 36.9706 43 32V24C43 13.5066 34.4934 5 24 5V5C13.5066 5 5 13.5066 5 24V26.1765V32.0159C5 35.2022 7.94055 37.5757 11.0552 36.9033L24.952 33.903"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M37 32C37 33.6569 35.6569 35 34 35C32.3431 35 31 33.6569 31 32C31 30.3431 32.3431 29 34 29C35.6569 29 37 30.3431 37 32Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
