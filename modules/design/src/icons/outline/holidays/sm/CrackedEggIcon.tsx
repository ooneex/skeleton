import type { SVGProps } from "react";

export const CrackedEggIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M3.5 13.5L8 11L12 14L16 11L20.5 13.5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M20.5 13.5C20.5 18.4706 16.6944 22 12 22C7.30558 22 3.5 18.4706 3.5 13.5C3.5 8.52944 7.30558 2 12 2C16.6944 2 20.5 8.52944 20.5 13.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
