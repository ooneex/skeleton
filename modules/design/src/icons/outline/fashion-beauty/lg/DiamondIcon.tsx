import type { SVGProps } from "react";

export const DiamondIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16.5 17L23.7883 43.7262M31.5 17L24.2122 43.7262"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M31.5 17L38 5" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M16.5 17L10 5" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M24.6414 4.95251L30.2609 16.9896" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M23.3593 4.95471L17.7386 16.9937" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M45 17H3" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M45 17L24 44L3 17L10.0946 5H37.9054L45 17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
