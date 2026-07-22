import type { SVGProps } from "react";

export const ChevronUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.99991 22.4142L15.9999 9.41418L28.9999 22.4142L30.4141 21L15.9999 6.58576L1.58569 21L2.99991 22.4142Z"
        fill="currentColor"
      />
    </svg>
  );
};
