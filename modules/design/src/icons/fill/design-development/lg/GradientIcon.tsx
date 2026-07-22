import type { SVGProps } from "react";

export const GradientIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M24 4L24 44L4 44L4 4L24 4Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M38 4L38 44L27 44L27 4L38 4Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 4L44 44L41 44L41 4L44 4Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
