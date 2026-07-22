import type { SVGProps } from "react";

export const DotsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="4" cy="16" r="3" strokeWidth="0" fill="currentColor" />
      <circle cx="16" cy="16" r="3" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="28" cy="16" r="3" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
