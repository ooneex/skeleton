import type { SVGProps } from "react";

export const LinesYIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="8" y="10" width="2" height="12" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="14" y="6" width="2" height="16" strokeWidth="0" fill="currentColor" />
      <rect x="20" y="15" width="2" height="7" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="2" y="2" width="2" height="20" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
