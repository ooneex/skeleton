import type { SVGProps } from "react";

export const SquareLayoutGrid2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V9H1V6Z" fill="currentColor" />
      <path d="M1 11V18C1 19.6569 2.34315 21 4 21H9V11H1Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 11V18C23 19.6569 21.6569 21 20 21H11V19H20C20.5523 19 21 18.5523 21 18V11H23Z"
        fill="currentColor"
      />
    </svg>
  );
};
