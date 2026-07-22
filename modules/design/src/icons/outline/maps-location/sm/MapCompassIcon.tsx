import type { SVGProps } from "react";

export const MapCompassIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15.5 9V6V7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M8.5 2.51807V18" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M22.5 12.5L20.8125 19.8125L13.5 21.5L15.1875 14.1875L22.5 12.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M18 18.25C18.6904 18.25 19.25 17.6904 19.25 17C19.25 16.3096 18.6904 15.75 18 15.75C17.3096 15.75 16.75 16.3096 16.75 17C16.75 17.6904 17.3096 18.25 18 18.25Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M22 8.5V3.5L15.5 6L8.5 2.5L2 5V20.5L8.5 18L10 18.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
