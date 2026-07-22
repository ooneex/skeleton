import type { SVGProps } from "react";

export const DiagramGanttIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="1" y="3" width="5" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="4" y="8" width="10" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="8" y="13" width="12" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="18" y="18" width="5" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
