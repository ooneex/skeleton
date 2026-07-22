import type { SVGProps } from "react";

export const PodiumIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 13H3V21H9" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M15 16H21V21H15"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M12 0L13.0811 2.13965L15.5 2.483L13.75 4.14853L14.163 6.5L12 5.38965L9.83622 6.5L10.25 4.14853L8.5 2.483L10.9181 2.13965L12 0Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path d="M15 9H9V21H15V9Z" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
    </svg>
  );
};
