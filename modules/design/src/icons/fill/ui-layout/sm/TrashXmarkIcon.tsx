import type { SVGProps } from "react";

export const TrashXmarkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m4.207,9l.464,11.125c.067,1.612,1.384,2.875,2.997,2.875h8.664c1.613,0,2.93-1.263,2.997-2.875l.464-11.125H4.207Zm11.707,9l-1.414,1.414-2.5-2.5-2.5,2.5-1.414-1.414,2.5-2.5-2.5-2.5,1.414-1.414,2.5,2.5,2.5-2.5,1.414,1.414-2.5,2.5,2.5,2.5Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path d="m16,5V1h-8v4H2v2h20v-2h-6Zm-6-2h4v2h-4v-2Z" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
