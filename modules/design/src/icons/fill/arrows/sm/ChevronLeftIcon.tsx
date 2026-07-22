import type { SVGProps } from "react";

export const ChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0001 1.58576L5.58588 12L16.0001 22.4142L17.4143 21L8.41431 12L17.4143 2.99997L16.0001 1.58576Z"
        fill="currentColor"
      />
    </svg>
  );
};
