import type { SVGProps } from "react";

export const UmbrellaIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M23 17C23 11.6667 21.3333 5.66667 16 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M9 17C9 11.6667 10.6667 5.66667 16 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16 1V27.5C16 28.8807 17.1193 30 18.5 30V30C19.8807 30 21 28.8807 21 27.5V27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 3C8.26801 3 2 9.26801 2 17H30C30 9.26801 23.732 3 16 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
