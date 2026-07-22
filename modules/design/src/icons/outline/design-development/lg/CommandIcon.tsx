import type { SVGProps } from "react";

export const CommandIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10V38C16 41.3137 13.3137 44 10 44C6.68629 44 4 41.3137 4 38C4 34.6863 6.68629 32 10 32H38C41.3137 32 44 34.6863 44 38C44 41.3137 41.3137 44 38 44C34.6863 44 32 41.3137 32 38V10C32 6.68629 34.6863 4 38 4C41.3137 4 44 6.68629 44 10C44 13.3137 41.3137 16 38 16H10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
