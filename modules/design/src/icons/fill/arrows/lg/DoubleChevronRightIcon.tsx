import type { SVGProps } from "react";

export const DoubleChevronRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 43.1213L43.1213 24L24 4.87866L21.8787 6.99998L38.8787 24L21.8787 41L24 43.1213Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99999 43.1213L28.1213 24L8.99998 4.87866L6.87866 6.99998L23.8787 24L6.87866 41L8.99999 43.1213Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
