import type { SVGProps } from "react";

export const CursorNotAllowedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 12L21 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12.5 5.5L2.50007 2.5L5.5 12.5L8.00012 8L12.5 5.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16.5 23C20.0899 23 23 20.0899 23 16.5C23 12.9101 20.0899 10 16.5 10C12.9101 10 10 12.9101 10 16.5C10 20.0899 12.9101 23 16.5 23Z"
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
