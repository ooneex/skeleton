import type { SVGProps } from "react";

export const PlaylistIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 27H29V29H3V27Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 20C30 22.2091 28.2091 24 26 24L6 24C3.79086 24 2 22.2091 2 20V7C2 4.79086 3.79086 3 6 3H26C28.2091 3 30 4.79086 30 7L30 20ZM22.5156 13.5L12.5 7.77682V19.2232L22.5156 13.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
