import type { SVGProps } from "react";

export const FillLoaderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m18,6H6c-3.309,0-6,2.691-6,6s2.691,6,6,6h12c3.309,0,6-2.691,6-6s-2.691-6-6-6ZM7,14h-2v-4h2v4Zm4,0h-2v-4h2v4Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
