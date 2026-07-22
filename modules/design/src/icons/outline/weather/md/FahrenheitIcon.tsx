import type { SVGProps } from "react";

export const FahrenheitIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13.3333 28V8H25.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M13.3333 17.3333H21.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M6 8C7.65685 8 9 6.65685 9 5C9 3.34315 7.65685 2 6 2C4.34315 2 3 3.34315 3 5C3 6.65685 4.34315 8 6 8Z"
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
