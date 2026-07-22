import type { SVGProps } from "react";

export const SparkleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M35 29L32 22L29 29L22 32L29 35L32 42L35 35L42 32L35 29Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M19 13L16 6L13 13L6 16L13 19L16 26L19 19L26 16L19 13Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M38.7 9.3L37.5 6.5L36.3 9.3L33.5 10.5L36.3 11.7L37.5 14.5L38.7 11.7L41.5 10.5L38.7 9.3Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <path
        d="M11.7 36.3L10.5 33.5L9.3 36.3L6.5 37.5L9.3 38.7L10.5 41.5L11.7 38.7L14.5 37.5L11.7 36.3Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
    </svg>
  );
};
