import type { SVGProps } from "react";

export const PilcrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M35 4V44H32V4H35Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 4V44H19V4H22Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 14C4 8.47715 8.47715 4 14 4H42V7H14C10.134 7 7 10.134 7 14C7 17.866 10.134 21 14 21H22V24H14C8.47715 24 4 19.5228 4 14Z"
        fill="currentColor"
      />
    </svg>
  );
};
