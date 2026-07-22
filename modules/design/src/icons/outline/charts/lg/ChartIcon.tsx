import type { SVGProps } from "react";

export const ChartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15.5 31H21.5V43H15.5V31Z" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path
        d="M26.5 5H32.5V43H26.5V5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path d="M37.5 23H43.5V43H37.5V23Z" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path d="M4.5 22H10.5V43H4.5V22Z" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
    </svg>
  );
};
