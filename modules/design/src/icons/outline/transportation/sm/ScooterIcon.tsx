import type { SVGProps } from "react";

export const ScooterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M20 7.5L20.6824 8.69425C21.5458 10.2052 22 11.9154 22 13.6556V16"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M2 17V18C2 19.6569 3.34315 21 5 21C6.65685 21 8 19.6569 8 18V17"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M17 17H2C1.44772 17 1 16.5523 1 16V15C1 11.6863 3.68629 9 7 9H10V13H12.3698C14.9825 13 17.1547 10.9885 17.3551 8.38348L17.5 6.5"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M17 5H14.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <circle
        cx="20"
        cy="18"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M22 7.5H19.5C18.1 7.5 17 6.4 17 5C17 3.6 18.1 2.5 19.5 2.5H22V7.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
