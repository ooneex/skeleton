import type { SVGProps } from "react";

export const AlignTopIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4L46 4L46 7L2 7L2 4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M39 44L27 44L27 10L39 10L39 44Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M21 29L9 29L9 10L21 10L21 29Z" fill="currentColor" />
    </svg>
  );
};
