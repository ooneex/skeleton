import type { SVGProps } from "react";

export const DesktopArrowUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 20H18V22H6V20Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 16V22H11V16H13Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 3L2 18L22 18L22 3L2 3ZM13.0001 15V11.5L17 11.5L12 5.5L7 11.5H11.0001V15H13.0001Z"
        fill="currentColor"
      />
    </svg>
  );
};
