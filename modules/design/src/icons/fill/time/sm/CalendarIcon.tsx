import type { SVGProps } from "react";

export const CalendarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="6" width="2" height="5" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="16" width="2" height="5" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m20,3H4c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3h16c1.654,0,3-1.346,3-3V6c0-1.654-1.346-3-3-3Zm0,16H4c-.551,0-1-.448-1-1v-9h18v9c0,.552-.449,1-1,1Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
