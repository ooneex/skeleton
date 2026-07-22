import type { SVGProps } from "react";

export const FunctionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9 18H27"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M6 44.4775V44.4775C10.384 45.5617 14.7486 42.6338 15.4083 38.1662L19.5917 9.83379C20.2514 5.36617 24.616 2.43826 29 3.52247V3.52247"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M30 45V45C30.9481 45 31.8448 44.569 32.437 43.8287L42.563 31.1713C43.1552 30.431 44.0519 30 45 30V30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M43.5 45V45C42.269 45 41.1381 44.3215 40.5588 43.2353L34.4411 31.7647C33.8617 30.6785 32.7309 30 31.4999 30V30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
