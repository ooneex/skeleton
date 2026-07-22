import type { SVGProps } from "react";

export const GridCirclePlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="17.5" cy="6.5" r="4.5" strokeWidth="0" fill="currentColor" />
      <circle cx="6.5" cy="6.5" r="4.5" strokeWidth="0" fill="currentColor" />
      <circle cx="6.5" cy="17.5" r="4.5" strokeWidth="0" fill="currentColor" />
      <polygon
        points="22 16.5 18.5 16.5 18.5 13 16.5 13 16.5 16.5 13 16.5 13 18.5 16.5 18.5 16.5 22 18.5 22 18.5 18.5 22 18.5 22 16.5"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
