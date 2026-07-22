import type { SVGProps } from "react";

export const BookmarksIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m21,5H7c-2.206,0-4,1.794-4,4v22.921l11-7.7,11,7.7V9c0-2.206-1.794-4-4-4Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m29,27h-2V9c0-3.309-2.691-6-6-6h-11V1h11c4.411,0,8,3.589,8,8v18Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
