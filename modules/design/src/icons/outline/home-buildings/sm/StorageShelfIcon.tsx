import type { SVGProps } from "react";

export const StorageShelfIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M17 11V7H11V11" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M13 19V15H7V19" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M3 11H21" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M3 19H21" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M3 21L3 5C3 3.89543 3.89543 3 5 3L19 3C20.1046 3 21 3.89543 21 5L21 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
