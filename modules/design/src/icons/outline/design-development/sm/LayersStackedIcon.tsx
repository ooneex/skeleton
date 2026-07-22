import type { SVGProps } from "react";

export const LayersStackedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polyline
        points="6.167 15 2 20 17 20 22 14 17.833 14"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-cap="butt"
      />
      <polyline
        points="6.167 10 2 15 17 15 22 9 17.833 9"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <polygon
        points="17 10 2 10 7 4 22 4 17 10"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
