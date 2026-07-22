import type { SVGProps } from "react";

export const LayersStackedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="26 12 2 12 6 4 30 4 26 12"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-cap="butt"
      />
      <polyline
        points="4 16 2 20 26 20 28.408 15.184"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <polyline
        points="4 24 2 28 26 28 28.408 23.184"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
    </svg>
  );
};
