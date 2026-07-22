import type { SVGProps } from "react";

export const MicrowaveIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M14 14L14 16L6 16L6 14L14 14Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 3C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6C1 4.34315 2.34315 3 4 3H20ZM4 17H16V7H4V17ZM18 13V15H21V13H18ZM18 11H21V9H18V11Z"
        fill="currentColor"
      />
    </svg>
  );
};
