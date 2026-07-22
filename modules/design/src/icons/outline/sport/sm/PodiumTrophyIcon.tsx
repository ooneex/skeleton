import type { SVGProps } from "react";

export const PodiumTrophyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M15 3H16.25C16.4903 3 16.5922 3.30585 16.4 3.45L15 4.5"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M9 3H7.75C7.50975 3 7.4078 3.30585 7.6 3.45L9 4.5"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M9 15H3V21H9" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M15 17H21V21H15"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M9 2V5C9 6.65685 10.3431 8 12 8C13.6569 8 15 6.65685 15 5V2H9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M15 12H9V21H15V12Z" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
    </svg>
  );
};
