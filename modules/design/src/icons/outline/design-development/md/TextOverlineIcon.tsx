import type { SVGProps } from "react";

export const TextOverlineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M10.1473 22H21.8382" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M8.11031 28H8L15.1111 8H16H16.8889L24 28H23.89"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M3 4H29"
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
