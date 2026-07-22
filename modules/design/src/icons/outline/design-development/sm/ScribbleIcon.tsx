import type { SVGProps } from "react";

export const ScribbleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M2 13C5.66667 8.5 12.9068 0.860171 15 3.99999C17 7 5.5 15.5 8.5 18C11.5968 20.5807 17.5 8.99998 20 12C21.8517 14.222 14.4645 20 18 20C19 20 21 19 21 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
