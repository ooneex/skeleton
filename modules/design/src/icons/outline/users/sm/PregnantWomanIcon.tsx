import type { SVGProps } from "react";

export const PregnantWomanIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polyline
        points="11 20 11 23 12 23 13 20"
        fill="currentColor"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <circle
        cx="12"
        cy="3"
        r="2"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <path
        d="m8.6,16.774l-.6,3.226h9l-.689-2.756c1.236-1.816.765-4.29-1.051-5.525-.125-.085-.255-.163-.389-.234l-.492-1.969c-.223-.891-1.023-1.516-1.941-1.516h-1.2c-.759,0-1.452.429-1.792,1.107l-.999,1.998c-.247.494-.047,1.095.447,1.342l3.106,1.553"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
