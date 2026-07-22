import type { SVGProps } from "react";

export const ComputerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 31H22C24.2091 31 26 29.2091 26 27L26 5C26 2.79086 24.2091 1 22 1H10C7.79086 1 6 2.79086 6 5L6 27C6 29.2091 7.79086 31 10 31ZM16 24C17.6568 24 19 22.6569 19 21C19 19.3431 17.6568 18 16 18C14.3431 18 13 19.3431 13 21C13 22.6569 14.3431 24 16 24ZM12 7V9H20V7H12Z"
        fill="currentColor"
      />
    </svg>
  );
};
