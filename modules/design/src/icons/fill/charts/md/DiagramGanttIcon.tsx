import type { SVGProps } from "react";

export const DiagramGanttIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="1" y="6" width="5" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="4" y="12" width="15" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="13" y="18" width="15" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="26" y="24" width="5" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
