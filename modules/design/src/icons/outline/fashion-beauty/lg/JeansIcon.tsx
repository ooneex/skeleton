import type { SVGProps } from "react";

export const JeansIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M17 25L18.9399 25C21.0711 25 23.0862 25.9709 24.4143 27.6376L25.5 29L26.5857 27.6376C27.9138 25.9709 29.9289 25 32.0601 25L34 25"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M19 11V5" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M32 11V5" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M11 11H40" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M11 5V18L5 24L8.16422 39.0301C8.65132 41.3438 10.6925 43 13.057 43H35C37.7614 43 40 40.7614 40 38V5H11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M34 31.3158L25.5 37L17 31.3158V19H34V31.3158Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
