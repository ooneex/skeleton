import type { SVGProps } from "react";

export const SquareArrowUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6C2 3.79086 3.79086 2 6 2H26C28.2091 2 30 3.79086 30 6V26C30 28.2091 28.2091 30 26 30H6C3.79086 30 2 28.2091 2 26V6ZM17 25V9.91421L23 15.9142L24.4142 14.5L16 6.08579L7.58579 14.5L9 15.9142L15 9.91421V25H17Z"
        fill="currentColor"
      />
    </svg>
  );
};
