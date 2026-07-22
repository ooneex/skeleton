import type { SVGProps } from "react";

export const ExportIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m18,9h-5v8h-2v-8h-5c-1.6543,0-3,1.3457-3,3v8c0,1.6543,1.3457,3,3,3h12c1.6543,0,3-1.3457,3-3v-8c0-1.6543-1.3457-3-3-3Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <polygon
        points="11 3.9141 11 9 13 9 13 3.9141 16 6.9141 17.4141 5.5 12 .0859 6.5859 5.5 8 6.9141 11 3.9141"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
