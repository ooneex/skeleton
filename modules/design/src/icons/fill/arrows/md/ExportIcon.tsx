import type { SVGProps } from "react";

export const ExportIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="23.4141 8 16 .5859 8.5859 8 10 9.4141 15 4.4141 15 12 17 12 17 4.4141 22 9.4141 23.4141 8"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m25,12h-8v9h-2v-9H7c-2.2061,0-4,1.7944-4,4v10c0,2.2056,1.7939,4,4,4h18c2.2061,0,4-1.7944,4-4v-10c0-2.2056-1.7939-4-4-4Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
