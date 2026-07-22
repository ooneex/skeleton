import type { SVGProps } from "react";

export const BookmarkPlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m18,1H6c-1.654,0-3,1.346-3,3v19.805l9-5.625,9,5.625V4c0-1.654-1.346-3-3-3Zm-2,10h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
