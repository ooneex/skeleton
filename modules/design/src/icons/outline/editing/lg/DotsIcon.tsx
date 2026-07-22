import type { SVGProps } from "react";

export const DotsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 27.5C25.933 27.5 27.5 25.933 27.5 24C27.5 22.067 25.933 20.5 24 20.5C22.067 20.5 20.5 22.067 20.5 24C20.5 25.933 22.067 27.5 24 27.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M41.5 27.5C43.433 27.5 45 25.933 45 24C45 22.067 43.433 20.5 41.5 20.5C39.567 20.5 38 22.067 38 24C38 25.933 39.567 27.5 41.5 27.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M6.5 27.5C8.433 27.5 10 25.933 10 24C10 22.067 8.433 20.5 6.5 20.5C4.567 20.5 3 22.067 3 24C3 25.933 4.567 27.5 6.5 27.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
