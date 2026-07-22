import type { SVGProps } from "react";

export const FilterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2H42V9.37303L29 24.373V38.5L19 46V24.373L6 9.37303V2Z"
        fill="currentColor"
      />
    </svg>
  );
};
