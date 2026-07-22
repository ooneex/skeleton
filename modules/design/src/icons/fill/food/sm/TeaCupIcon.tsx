import type { SVGProps } from "react";

export const TeaCupIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M22 11V8H18V6H24V11C24 12.6569 22.6569 14 21 14H18V12H21C21.5523 12 22 11.5523 22 11Z"
        fill="currentColor"
      />
      <path d="M10 0H12V4H10V0Z" fill="currentColor" data-color="color-2" />
      <path d="M14 1H16V4H14V1Z" fill="currentColor" data-color="color-2" />
      <path d="M6 1H8V4H6V1Z" fill="currentColor" data-color="color-2" />
      <path
        d="M11 12H9V17H15V12H13V10V6H20V13C20 17.9706 15.9706 22 11 22C6.02944 22 2 17.9706 2 13V6H11V12Z"
        fill="currentColor"
      />
    </svg>
  );
};
