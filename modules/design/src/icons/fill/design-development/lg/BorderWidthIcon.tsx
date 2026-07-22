import type { SVGProps } from "react";

export const BorderWidthIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M44 24L4 24L4 4L44 4L44 24Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M44 38L4 38L4 27L44 27L44 38Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 44L4 44L4 41L44 41L44 44Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
