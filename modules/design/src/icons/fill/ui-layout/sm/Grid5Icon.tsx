import type { SVGProps } from "react";

export const Grid5Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13 13L22 13V22H13L13 13Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 13L11 13L11 22H2L2 13Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2L11 2L11 11L2 11L2 2ZM4 4L4 9L9 9V4L4 4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 2L22 2V11L13 11L13 2Z" fill="currentColor" />
    </svg>
  );
};
