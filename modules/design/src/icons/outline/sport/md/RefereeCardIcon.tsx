import type { SVGProps } from "react";

export const RefereeCardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14 24L7 24C5.34315 24 4 22.6569 4 21L4 6C4 4.34314 5.34315 3 7 3L19 3C20.6569 3 22 4.34315 22 6L22 16L22 15.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M9.5 8.5L16.5 15.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16.5 8.5L9.5 15.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24 22L24 16L23 16C21.3431 16 20 17.3431 20 19L20 21L19.591 21.409C18.5723 22.4277 18 23.8093 18 25.25V25.25C18 26.6906 18.5723 28.0723 19.591 29.091L20.5 30L20.4321 30M24.5 8.99998L28.5682 17.95C29.1689 19.2717 29.2701 20.7663 28.8529 22.1569L26.5 30L26.5803 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
