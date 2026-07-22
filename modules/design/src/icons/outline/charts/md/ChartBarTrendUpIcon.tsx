import type { SVGProps } from "react";

export const ChartBarTrendUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13 16H19V29H13V16Z" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path d="M23 11H29V29H23V11Z" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path d="M3 21H9V29H3V21Z" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path
        d="M3 10L8.53846 4.4L14.0769 10L21 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
