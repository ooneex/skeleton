import type { SVGProps } from "react";

export const BrailleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="6" cy="4" r="3" strokeWidth="0" fill="currentColor" />
      <circle cx="6" cy="20" r="3" strokeWidth="0" fill="currentColor" />
      <circle cx="18" cy="4" r="3" strokeWidth="0" fill="currentColor" />
      <circle cx="18" cy="12" r="3" strokeWidth="0" fill="currentColor" />
      <circle cx="6" cy="12" r="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="18" cy="20" r="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
