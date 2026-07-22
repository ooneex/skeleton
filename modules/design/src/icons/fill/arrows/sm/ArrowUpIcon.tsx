import type { SVGProps } from "react";

export const ArrowUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13 22V3H11V22H13Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.99991 11.4142L11.9999 4.41418L18.9999 11.4142L20.4141 9.99997L11.9999 1.58576L3.58569 9.99997L4.99991 11.4142Z"
        fill="currentColor"
      />
    </svg>
  );
};
