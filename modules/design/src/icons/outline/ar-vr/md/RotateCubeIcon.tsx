import type { SVGProps } from "react";

export const RotateCubeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M23.5 11.8422L16 15.0001M8.5 11.8422L16 15.0001M16 15.0001V23.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M2 16C2 8.26801 8.26801 2 16 2L15 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M30 16C30 23.732 23.732 30 16 30L17 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M23.5 20.3421V11.6579L16 8.5L8.5 11.6579V20.3421L16 23.5L23.5 20.3421Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
