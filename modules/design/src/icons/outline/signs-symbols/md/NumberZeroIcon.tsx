import type { SVGProps } from "react";

export const NumberZeroIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 21V11C24 6.58172 20.4183 3 16 3C11.5817 3 8 6.58172 8 11V21C8 25.4183 11.5817 29 16 29C20.4183 29 24 25.4183 24 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
