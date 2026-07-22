import type { SVGProps } from "react";

export const BowTieIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M19 16H23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M9 16H13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M19 13L26.2 7.6C28.1777 6.11672 31 7.52786 31 10V22C31 24.4721 28.1777 25.8833 26.2 24.4L19 19"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M13 13L5.8 7.6C3.82229 6.11672 1 7.52786 1 10V22C1 24.4721 3.82229 25.8833 5.8 24.4L13 19"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M19 13L19 19C19 20.6569 17.6569 22 16 22C14.3431 22 13 20.6569 13 19L13 13C13 11.3431 14.3431 10 16 10C17.6569 10 19 11.3431 19 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
