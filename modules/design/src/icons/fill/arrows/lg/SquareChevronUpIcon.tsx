import type { SVGProps } from "react";

export const SquareChevronUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 10C4 6.68629 6.68629 4 10 4H38C41.3137 4 44 6.68629 44 10V38C44 41.3137 41.3137 44 38 44H10C6.68629 44 4 41.3137 4 38V10ZM15 29.1213L12.8787 27L24 15.8787L35.1213 27L33 29.1213L24 20.1213L15 29.1213Z"
        fill="currentColor"
      />
    </svg>
  );
};
