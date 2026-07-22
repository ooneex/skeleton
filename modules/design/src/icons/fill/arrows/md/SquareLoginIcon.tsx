import type { SVGProps } from "react";

export const SquareLoginIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M2 6C2 3.79086 3.79086 2 6 2H26C28.2091 2 30 3.79086 30 6V26C30 28.2091 28.2091 30 26 30H6C3.79086 30 2 28.2091 2 26V17L17.0858 17L11.0858 23L12.5 24.4142L20.9142 16L12.5 7.58579L11.0858 9L17.0858 15L2 15V6Z"
        fill="currentColor"
      />
    </svg>
  );
};
