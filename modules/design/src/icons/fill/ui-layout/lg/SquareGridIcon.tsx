import type { SVGProps } from "react";

export const SquareGridIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4C6.68629 4 4 6.68629 4 10V38C4 41.3137 6.68629 44 10 44H38C41.3137 44 44 41.3137 44 38V10C44 6.68629 41.3137 4 38 4H10ZM22 11H11V22H22V11ZM37 11H26V22H37V11ZM26 26H37V37H26V26ZM22 26H11V37H22V26Z"
        fill="currentColor"
      />
    </svg>
  );
};
