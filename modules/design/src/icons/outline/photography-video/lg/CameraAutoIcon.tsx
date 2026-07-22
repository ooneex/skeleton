import type { SVGProps } from "react";

export const CameraAutoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M19 28H29" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M17.6697 32H17.5L23.5 17L24.5 17L30.5 32H30.3153"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M45 36L45 16C45 13.2386 42.7614 11 40 11L34.5 11L30 5L18 5L13.5 11L8 11C5.23857 11 3 13.2386 3 16L3 36C3 38.7614 5.23858 41 8 41L40 41C42.7614 41 45 38.7614 45 36Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
