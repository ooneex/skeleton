import type { SVGProps } from "react";

export const ChartBarArrowUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15.5 32H21.5V43H15.5V32Z" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path
        d="M26.5 16V43H32.5V16"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path d="M37.5 23H43.5V43H37.5V23Z" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path d="M4.5 21H10.5V43H4.5V21Z" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path
        d="M26.5 16L20 16L29.5 4L39 16L32.5 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
