import type { SVGProps } from "react";

export const GridCircleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="23.5" cy="8.5" r="6.5" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="8.5" cy="23.5" r="6.5" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="8.5" cy="8.5" r="6.5" strokeWidth="0" fill="currentColor" />
      <circle cx="23.5" cy="23.5" r="6.5" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
