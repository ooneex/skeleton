import type { SVGProps } from "react";

export const ChevronUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.58588 16L12.0001 5.58576L22.4143 16L21.0001 17.4142L12.0001 8.41418L3.00009 17.4142L1.58588 16Z"
        fill="currentColor"
      />
    </svg>
  );
};
