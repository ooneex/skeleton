import type { SVGProps } from "react";

export const ObjsGroupIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 2H22V22H2V2ZM4 4V20H20V4H4Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 6H18V14H16V10C16 8.89543 15.1046 8 14 8H10V6Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 10H14V18H6V10Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
