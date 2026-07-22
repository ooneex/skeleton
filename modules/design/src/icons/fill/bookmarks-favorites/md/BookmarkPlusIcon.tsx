import type { SVGProps } from "react";

export const BookmarkPlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m25,1H7c-2.206,0-4,1.794-4,4v26.869l13-8.667,13,8.667V5c0-2.206-1.794-4-4-4Zm-4,12h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
