import type { SVGProps } from "react";

export const ChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.1213 5.99998L15.1213 24L33.1213 42L31 44.1213L10.8787 24L31 3.87866L33.1213 5.99998Z"
        fill="currentColor"
      />
    </svg>
  );
};
