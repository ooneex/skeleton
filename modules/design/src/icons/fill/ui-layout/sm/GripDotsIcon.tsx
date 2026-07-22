import type { SVGProps } from "react";

export const GripDotsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="12" cy="8.25" r="1.75" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="12" cy="15.75" r="1.75" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="19.75" cy="8.25" r="1.75" strokeWidth="0" fill="currentColor" />
      <circle cx="4.25" cy="8.25" r="1.75" strokeWidth="0" fill="currentColor" />
      <circle cx="19.75" cy="15.75" r="1.75" strokeWidth="0" fill="currentColor" />
      <circle cx="4.25" cy="15.75" r="1.75" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
