import type { SVGProps } from "react";

export const CalendarCheck2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="6" width="2" height="5" strokeWidth="0" fill="currentColor" />
      <rect x="16" width="2" height="5" strokeWidth="0" fill="currentColor" />
      <path
        d="m20,3H4c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3h1.144v-2h-1.144c-.552,0-1-.448-1-1v-9h18v9c0,.552-.448,1-1,1h-3.344v2h3.344c1.654,0,3-1.346,3-3V6c0-1.654-1.346-3-3-3Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <polygon
        points="10.5 22.914 6.586 19 8 17.586 10.5 20.086 17 13.586 18.414 15 10.5 22.914"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
