import type { SVGProps } from "react";

export const WineBottleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 19H23" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M13.5 6H18.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M9 25H23" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M18.5 2V12L19.0846 12.1299C21.3723 12.6383 23 14.6674 23 17.0109V31H9V17.0109C9 14.6674 10.6277 12.6383 12.9154 12.1299L13.5 12V2C13.5 1.44772 13.9477 1 14.5 1H17.5C18.0523 1 18.5 1.44772 18.5 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
