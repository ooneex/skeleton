import type { SVGProps } from "react";

export const Button2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M35 42L26 33L27 34.0076" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M32 27L15.0002 22L20 39L32 27Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M36 30H42C44.2091 30 46 28.2091 46 26V12C46 9.79086 44.2091 8 42 8L6 8C3.79086 8 2 9.79086 2 12L2 26C2 28.2091 3.79086 30 6 30H12"
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
