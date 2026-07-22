import type { SVGProps } from "react";

export const DotsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="12" cy="12" r="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="3" cy="12" r="2" strokeWidth="0" fill="currentColor" />
      <circle cx="21" cy="12" r="2" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
