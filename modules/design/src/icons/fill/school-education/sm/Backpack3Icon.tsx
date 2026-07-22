import type { SVGProps } from "react";

export const Backpack3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M21 19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V17.2314C3.53103 17.7077 4.23053 18 5 18H19C19.7695 18 20.469 17.7077 21 17.2314V19Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M17 5L15 5L15 2L9 2L9 5L7 5L7 -4.37114e-07L17 0L17 5Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 13C22 14.6569 20.6569 16 19 16H16V13H14V16H10V13H8V16H5C3.34315 16 2 14.6569 2 13V4H22V13ZM9 9H15V7H9V9Z"
        fill="currentColor"
      />
    </svg>
  );
};
