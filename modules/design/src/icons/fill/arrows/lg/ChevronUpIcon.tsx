import type { SVGProps } from "react";

export const ChevronUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.99998 33.1213L24 15.1213L42 33.1213L44.1213 31L24 10.8787L3.87866 31L5.99998 33.1213Z"
        fill="currentColor"
      />
    </svg>
  );
};
