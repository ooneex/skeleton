import type { SVGProps } from "react";

export const StackYIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 41L2 41L2 44L46 44L46 41Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 4L2 4L2 7L46 7L46 4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M42 33L6 33L6 15L42 15L42 33Z" fill="currentColor" />
    </svg>
  );
};
