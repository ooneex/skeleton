import type { SVGProps } from "react";

export const Grid5Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M26 4L44 4V22L26 22L26 4Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M26 26L44 26V44L26 44L26 26Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 26L22 26L22 44L4 44L4 26Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4L22 4L22 22L4 22L4 4ZM7 7L7 19L19 19V7L7 7Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
