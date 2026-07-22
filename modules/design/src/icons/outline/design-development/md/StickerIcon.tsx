import type { SVGProps } from "react";

export const StickerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M15 30V27C15 20.3726 20.3726 15 27 15H30"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M2 16C2 23.732 8.26801 30 16 30L30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
