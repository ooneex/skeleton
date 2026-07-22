import type { SVGProps } from "react";

export const FridgeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M36 3L12 3C9.23858 3 7 5.23858 7 8L7 40C7 42.7614 9.23858 45 12 45L36 45C38.7614 45 41 42.7614 41 40L41 8C41 5.23858 38.7614 3 36 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M13 25L13 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M13 10L13 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M7 19H41" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
    </svg>
  );
};
