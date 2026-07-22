import type { SVGProps } from "react";

export const CalendarClockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="6" width="2" height="5" strokeWidth="0" fill="currentColor" />
      <rect x="16" width="2" height="5" strokeWidth="0" fill="currentColor" />
      <path
        d="m20,3H4c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3h6.231v-2h-6.231c-.552,0-1-.449-1-1v-9h18v1.95h2v-4.95c0-1.654-1.346-3-3-3Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m18,12c-3.309,0-6,2.691-6,6s2.691,6,6,6,6-2.691,6-6-2.691-6-6-6Zm2,9.414l-3-3v-3.914h2v3.086l2.414,2.414-1.414,1.414Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
