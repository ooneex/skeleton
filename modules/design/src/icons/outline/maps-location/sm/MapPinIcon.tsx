import type { SVGProps } from "react";

export const MapPinIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15.5 8.5V6V7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M8.5 2.51807V18" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M22 9V3.5L15.5 6L8.5 2.5L2 5V20.5L8.5 18L10.5444 19.0222"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M18 21.75C20.328 20.094 22 18.209 22 16C22 13.791 20.209 12 18 12C15.791 12 14 13.791 14 16C14 18.209 15.672 20.094 18 21.75Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M18 17.25C18.6904 17.25 19.25 16.6904 19.25 16C19.25 15.3096 18.6904 14.75 18 14.75C17.3096 14.75 16.75 15.3096 16.75 16C16.75 16.6904 17.3096 17.25 18 17.25Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
