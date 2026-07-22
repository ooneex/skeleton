import type { SVGProps } from "react";

export const ScreenReaderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10 41H8C5.23858 41 3 38.7614 3 36V12C3 9.23858 5.23858 7 8 7H40C42.7614 7 45 9.23858 45 12V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M23.6923 26H14V32.4V38H23.6923L35 44V20L23.6923 26Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M42.098 39.1502C44.4455 37.6375 46 35.0003 46 32C46 28.9997 44.4455 26.3625 42.098 24.8498"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M39.2162 28.9489C40.281 29.5492 41 30.6906 41 32C41 33.2356 40.3597 34.3216 39.3929 34.9445"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
    </svg>
  );
};
