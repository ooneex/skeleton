import type { SVGProps } from "react";

export const FahrenheitIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4 5C5.10457 5 6 4.10457 6 3C6 1.89543 5.10457 1 4 1C2.89543 1 2 1.89543 2 3C2 4.10457 2.89543 5 4 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M10 21V6H19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M10 13H16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
