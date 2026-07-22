import type { SVGProps } from "react";

export const ArchiveContentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M10 16H14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M9 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M9 10H15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M5 11V4C5 2.89543 5.89543 2 7 2H17C18.1046 2 19 2.89543 19 4V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M5 21L19 21C20.1046 21 21 20.1046 21 19V15H3V19C3 20.1046 3.89543 21 5 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
