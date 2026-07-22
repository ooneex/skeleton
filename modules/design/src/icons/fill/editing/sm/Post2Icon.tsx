import type { SVGProps } from "react";

export const Post2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M22 15L2 15V13L22 13V15Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 19H2V21H13V19Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6C10 8.20914 8.20914 10 6 10C3.79086 10 2 8.20914 2 6Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
