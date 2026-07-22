import type { SVGProps } from "react";

export const AddBelowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M22 8L2 8V10L22 10V8Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 4H2V2H22V4Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 23V13H11V23H13Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 17L7 17L7 19L17 19L17 17Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
