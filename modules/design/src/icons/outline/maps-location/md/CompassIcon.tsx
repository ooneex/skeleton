import type { SVGProps } from "react";

export const CompassIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 17.3334C16.7364 17.3334 17.3334 16.7365 17.3334 16.0001C17.3334 15.2637 16.7364 14.6667 16 14.6667C15.2636 14.6667 14.6667 15.2637 14.6667 16.0001C14.6667 16.7365 15.2636 17.3334 16 17.3334Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M22 10L19.5 19.5L10 22L12.5 12.5L22 10Z"
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
