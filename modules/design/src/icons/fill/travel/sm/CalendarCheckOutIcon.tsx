import type { SVGProps } from "react";

export const CalendarCheckOutIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="6" width="2" height="5" strokeWidth="0" fill="currentColor" />
      <rect x="16" width="2" height="5" strokeWidth="0" fill="currentColor" />
      <path
        d="m20,3H4c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3h7.5v-2h-7.5c-.552,0-1-.448-1-1v-9h18v4h2v-7c0-1.654-1.346-3-3-3Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <polygon
        points="18.5 12.586 17.086 14 20.086 17 13 17 13 19 20.086 19 17.086 22 18.5 23.414 23.914 18 18.5 12.586"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
