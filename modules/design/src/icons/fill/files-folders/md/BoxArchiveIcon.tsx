import type { SVGProps } from "react";

export const BoxArchiveIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 11L2 3L30 3L30 11L2 11Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 25C29 27.2091 27.2091 29 25 29L7 29C4.79086 29 3 27.2091 3 25V13L29 13L29 25ZM12 16L12 18L20 18V16H12Z"
        fill="currentColor"
      />
    </svg>
  );
};
