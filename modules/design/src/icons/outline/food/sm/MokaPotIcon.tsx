import type { SVGProps } from "react";

export const MokaPotIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18 4H22L22 7C22 8.65686 20.6569 10 19 10H17.3285"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M11 1H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M8 13H17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" data-cap="butt" fill="none" />
      <path
        d="M17 13L19 21.5V22H6V21.5L8 13L7 7.78947L5 4.5V4H18L17 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M11 17H11.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
