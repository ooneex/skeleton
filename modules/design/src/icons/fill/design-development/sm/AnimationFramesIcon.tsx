import type { SVGProps } from "react";

export const AnimationFramesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M7 8H1V16H7L7 8Z" fill="currentColor" data-color="color-2" />
      <path d="M23 8H17V16H23V8Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 3L23 21L0.999999 21L1 3L23 3ZM21 5L3 5L3 19L21 19L21 5Z"
        fill="currentColor"
      />
      <path d="M15 7H9V17H15L15 7Z" fill="currentColor" />
    </svg>
  );
};
