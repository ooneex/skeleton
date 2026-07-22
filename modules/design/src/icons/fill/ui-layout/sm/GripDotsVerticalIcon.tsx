import type { SVGProps } from "react";

export const GripDotsVerticalIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="15.75" cy="12" r="1.75" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="8.25" cy="12" r="1.75" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="15.75" cy="19.75" r="1.75" strokeWidth="0" fill="currentColor" />
      <circle cx="15.75" cy="4.25" r="1.75" strokeWidth="0" fill="currentColor" />
      <circle cx="8.25" cy="19.75" r="1.75" strokeWidth="0" fill="currentColor" />
      <circle cx="8.25" cy="4.25" r="1.75" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
