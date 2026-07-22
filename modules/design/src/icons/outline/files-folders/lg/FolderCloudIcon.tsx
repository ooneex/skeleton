import type { SVGProps } from "react";

export const FolderCloudIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M20.5 41H8C5.23858 41 3 38.7614 3 36V10C3 7.23858 5.23858 5 8 5H19L27 11H40C42.7614 11 45 13.2386 45 16V23"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M37.5915 26C33.4769 26.0021 29.9691 29.0161 29.3035 33.1209C26.6148 33.4573 24.7054 35.933 25.0375 38.6501C25.3402 41.1257 27.4157 42.9887 29.8836 43H37.5915C42.2351 43 46 39.1941 46 34.5C46 29.8059 42.2351 26 37.5915 26Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
