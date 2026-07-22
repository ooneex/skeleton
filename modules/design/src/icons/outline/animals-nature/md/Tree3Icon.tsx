import type { SVGProps } from "react";

export const Tree3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 21V30M16 21L13.5 18.5M16 21L18.5 18.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 26C20.4183 26 24 22.4183 24 18C24 9.58172 16 2 16 2C16 2 8 9.58172 8 18C8 22.4183 11.5817 26 16 26Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
