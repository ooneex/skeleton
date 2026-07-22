import type { SVGProps } from "react";

export const AlignLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 46L3 2L6 2L6 46L3 46Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M44 10L9 10L9 20L44 20L44 10Z" fill="currentColor" />
      <path d="M29 28L9 28L9 38L29 38L29 28Z" fill="currentColor" />
    </svg>
  );
};
