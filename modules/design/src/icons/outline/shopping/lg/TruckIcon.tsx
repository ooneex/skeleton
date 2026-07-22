import type { SVGProps } from "react";

export const TruckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M42 29.5L45 29.5L44.5 29.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M21 36.5H30" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" data-cap="butt" fill="none" />
      <path
        d="M39.1408 36.5H41.8179C42.7903 36.5 43.6217 35.8006 43.7883 34.8427L45.5 25L40.5631 23.1012C39.5916 22.7275 38.8832 21.877 38.6914 20.854L37.5 14.5H26.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M17 36.5H25.1106L27 8L4.38943 8L2.5 36.5H8"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M34.5 41C36.9853 41 39 38.9853 39 36.5C39 34.0147 36.9853 32 34.5 32C32.0147 32 30 34.0147 30 36.5C30 38.9853 32.0147 41 34.5 41Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12.5 41C14.9853 41 17 38.9853 17 36.5C17 34.0147 14.9853 32 12.5 32C10.0147 32 8 34.0147 8 36.5C8 38.9853 10.0147 41 12.5 41Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
