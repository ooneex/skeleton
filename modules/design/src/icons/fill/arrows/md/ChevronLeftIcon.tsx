import type { SVGProps } from "react";

export const ChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.4142 3.00003L9.41424 16L22.4142 29L21 30.4142L6.58582 16L21 1.58582L22.4142 3.00003Z"
        fill="currentColor"
      />
    </svg>
  );
};
