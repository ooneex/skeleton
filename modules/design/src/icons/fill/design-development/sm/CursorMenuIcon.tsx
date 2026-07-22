import type { SVGProps } from "react";

export const CursorMenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M10 18H23V20H10V18Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M10 14H23V16H10V14Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 10H23V24H10V10ZM12 12V22H21V12H12Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M15.0573 5.2232L8.73545 8.73542L5.22309 15.0574L1.00854 1.00854L15.0573 5.2232Z" fill="currentColor" />
    </svg>
  );
};
