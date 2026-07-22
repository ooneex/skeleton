import type { SVGProps } from "react";

export const SnowmanHeadIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M13.308 11.5187L18.0497 13.0483C18.9737 13.3464 18.9737 14.6536 18.0497 14.9517L13.308 16.4813C12.3297 16.7969 11.2573 16.5082 10.5697 15.7441C9.67733 14.7526 9.67733 13.2474 10.5697 12.2559C11.2573 11.4918 12.3297 11.2031 13.308 11.5187Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" data-cap="butt" data-stroke="none" />
      <path d="M15 8H16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
