import type { SVGProps } from "react";

export const AlertWarningIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="15" y="2" width="2" height="21" strokeWidth="0" fill="currentColor" />
      <circle cx="16" cy="28" r="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
