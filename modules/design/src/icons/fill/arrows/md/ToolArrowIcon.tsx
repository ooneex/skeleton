import type { SVGProps } from "react";

export const ToolArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5858 9L23 10.4142L3.00003 30.4142L1.58582 29L21.5858 9Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M26.4402 16.3544L15.6456 5.55978L30.4174 1.58301L26.4402 16.3544Z" fill="currentColor" />
    </svg>
  );
};
