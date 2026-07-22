import type { SVGProps } from "react";

export const VirtualSpaceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14 30.8027C16.9417 30.2922 20.3571 30 24 30C27.6429 30 31.0583 30.2922 34 30.8027"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M4 12C4 8.68629 12.9543 6 24 6C35.0457 6 44 8.68629 44 12M4 12C4 14.2208 8.02199 16.1599 14 17.1973V41.1973C8.02199 40.1599 4 38.2208 4 36V12ZM44 12C44 14.2208 39.978 16.1599 34 17.1973V41.1973C39.978 40.1599 44 38.2208 44 36V12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
