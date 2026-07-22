import type { SVGProps } from "react";

export const ArrowsInfinityIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 19.5V23C16 26.866 12.866 30 9 30C5.13401 30 2 26.866 2 23C2 19.134 5.13401 16 9 16H23C26.866 16 30 12.866 30 9C30 5.13401 26.866 2 23 2C19.134 2 16 5.13401 16 9V12.5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M11.5 24L16 19.5L20.5 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M11.5 8L16 12.5L20.5 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
