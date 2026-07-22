import type { SVGProps } from "react";

export const BroomIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M20 14H28" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M20 21V7C20 4.79086 21.7909 3 24 3V3C26.2091 3 28 4.79086 28 7L28 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M7.72898 38.31L19.5312 21H28.469L40.2713 38.31C41.6291 40.3014 40.2029 43 37.7926 43H10.2077C7.7974 43 6.37119 40.3014 7.72898 38.31Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M20 43V36"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M28 43V36"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
