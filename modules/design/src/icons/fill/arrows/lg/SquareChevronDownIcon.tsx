import type { SVGProps } from "react";

export const SquareChevronDownIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4C6.68629 4 4 6.68629 4 10V38C4 41.3137 6.68629 44 10 44H38C41.3137 44 44 41.3137 44 38V10C44 6.68629 41.3137 4 38 4H10ZM15 18.8787L12.8787 21L24 32.1213L35.1213 21L33 18.8787L24 27.8787L15 18.8787Z"
        fill="currentColor"
      />
    </svg>
  );
};
