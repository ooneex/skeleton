import type { SVGProps } from "react";

export const LineDashedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M15 13L9 13L9 11L15 11L15 13Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 13L1 13L1 11L7 11L7 13Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 13L17 13L17 11L23 11L23 13Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
