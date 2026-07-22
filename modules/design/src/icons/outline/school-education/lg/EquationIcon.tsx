import type { SVGProps } from "react";

export const EquationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M45 6H28L15 41L7.54124 24H3"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M28 43V43C28.9481 43 29.8448 42.569 30.437 41.8287L40.563 29.1713C41.1552 28.431 42.0519 28 43 28V28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M41.5 43V43C40.269 43 39.1381 42.3215 38.5588 41.2353L32.4411 29.7647C31.8617 28.6785 30.7309 28 29.4999 28V28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
