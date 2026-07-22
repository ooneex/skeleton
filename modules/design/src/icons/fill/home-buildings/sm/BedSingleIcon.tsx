import type { SVGProps } from "react";

export const BedSingleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 10L9 10L9 7L15 7L15 10Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M6 3C4.34315 3 3 4.34315 3 6V10L7 10L7 7C7 6.46957 7.21071 5.96086 7.58579 5.58579C7.96086 5.21071 8.46957 5 9 5L15 5C16.1046 5 17 5.89543 17 7V10L21 10V6C21 4.34315 19.6569 3 18 3H6Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 21C21 19.6667 21 18.3333 21 17L3 17C3 17 3 20.469 3 21L1 21L1 15C1 13.3431 2.34315 12 4 12L20 12C21.6569 12 23 13.3431 23 15L23 21L21 21Z"
        fill="currentColor"
      />
    </svg>
  );
};
