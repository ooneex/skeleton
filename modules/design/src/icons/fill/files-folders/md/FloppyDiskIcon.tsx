import type { SVGProps } from "react";

export const FloppyDiskIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m23.414,2H6c-2.206,0-4,1.794-4,4v20c0,2.206,1.794,4,4,4h20c2.206,0,4-1.794,4-4V8.586l-6.586-6.586ZM7,4h13v8H7V4Zm18,24H7v-9h18v9Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
