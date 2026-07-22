import type { SVGProps } from "react";

export const AlertWarningIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="11" y="2" width="2" height="14" strokeWidth="0" fill="currentColor" />
      <circle cx="12" cy="20.5" r="1.5" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
