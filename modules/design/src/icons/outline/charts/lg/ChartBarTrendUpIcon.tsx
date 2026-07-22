import type { SVGProps } from "react";

export const ChartBarTrendUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15.5 35H21.5V43H15.5V35Z" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path d="M26.5 21H32.5V43H26.5V21Z" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path d="M37.5 13H43.5V43H37.5V13Z" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path d="M4.5 27H10.5V43H4.5V27Z" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path
        d="M5 14.5L13.3077 6.1L21.6154 14.5L32 4L31.5 4.50556"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M25 4H32V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
