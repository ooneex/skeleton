import type { SVGProps } from "react";

export const AnimationFramesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 23L9 23L9 9L2 9L2 23Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 23L30 23L30 9L23 9L23 23Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 3L1 29L31 29L31 3L1 3ZM3 5L29 5L29 27L3 27L3 5Z"
        fill="currentColor"
      />
      <path d="M11 7H21V25H11L11 7Z" fill="currentColor" />
    </svg>
  );
};
