import type { SVGProps } from "react";

export const DarkModeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 7.5C33.1127 7.5 40.5 14.8873 40.5 24C40.5 33.1127 33.1127 40.5 24 40.5V7.5Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M24 45C35.598 45 45 35.598 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 35.598 12.402 45 24 45Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
