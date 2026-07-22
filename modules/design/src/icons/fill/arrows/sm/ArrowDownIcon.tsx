import type { SVGProps } from "react";

export const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13 2V21H11V2H13Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.99991 12.5858L11.9999 19.5858L18.9999 12.5858L20.4141 14L11.9999 22.4142L3.58569 14L4.99991 12.5858Z"
        fill="currentColor"
      />
    </svg>
  );
};
