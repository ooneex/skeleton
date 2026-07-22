import type { SVGProps } from "react";

export const CodeCommitIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5 39V47H22.5V39H25.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M24 33C28.9706 33 33 28.9706 33 24C33 19.0294 28.9706 15 24 15C19.0294 15 15 19.0294 15 24C15 28.9706 19.0294 33 24 33Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M25.5 1V16.5H22.5V1H25.5Z" fill="currentColor" />
    </svg>
  );
};
