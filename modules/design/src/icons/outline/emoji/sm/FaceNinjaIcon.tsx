import type { SVGProps } from "react";

export const FaceNinjaIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M15.5 8H8.5C6.567 8 5 9.567 5 11.5C5 13.433 6.567 15 8.5 15H15.5C17.433 15 19 13.433 19 11.5C19 9.567 17.433 8 15.5 8Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <circle cx="8.5" cy="11.5" r="1.5" fill="currentColor" data-cap="butt" data-stroke="none" />
      <circle cx="15.5" cy="11.5" r="1.5" fill="currentColor" data-cap="butt" data-stroke="none" />
    </svg>
  );
};
