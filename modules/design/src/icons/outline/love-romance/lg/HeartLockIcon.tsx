import type { SVGProps } from "react";

export const HeartLockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 14V10C16 5.58172 19.5817 2 24 2V2C28.4183 2 32 5.58172 32 10V14"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M24 45C27.9924 43.1765 42 33.0705 42 23.8069C42 18.3911 37.6584 14 32.3088 14C28.7808 14 26.1456 16.2393 24 18.7521C21.858 16.2356 19.2192 14 15.6912 14C10.338 14 6 18.3911 6 23.8069C6 33.0705 20.0076 43.1765 24 45Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M24 37V32V32.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <circle
        cx="24"
        cy="28"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
