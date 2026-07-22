import type { SVGProps } from "react";

export const ComputerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M22 2L10 2C8.34316 2 7.00001 3.34315 7.00001 5L7.00001 27C7.00001 28.6569 8.34316 30 10 30L22 30C23.6569 30 25 28.6569 25 27L25 5C25 3.34315 23.6569 2 22 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 24C17.6569 24 19 22.6569 19 21C19 19.3431 17.6569 18 16 18C14.3431 18 13 19.3431 13 21C13 22.6569 14.3431 24 16 24Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M13 8H19"
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
