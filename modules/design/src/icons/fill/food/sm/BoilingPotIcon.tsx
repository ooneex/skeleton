import type { SVGProps } from "react";

export const BoilingPotIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M20 13V18C20 19.6569 18.6569 21 17 21H7C5.34315 21 4 19.6569 4 18V13H20Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M19 9C19 7.34315 20.3431 6 22 6H23V8H22C21.4477 8 21 8.44772 21 9V10H19V9Z" fill="currentColor" />
      <path d="M5 9C5 7.34315 3.65685 6 2 6H1V8H2C2.55228 8 3 8.44772 3 9V10H5V9Z" fill="currentColor" />
      <path
        d="M19 10H5V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V10ZM21 19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V8H21V19Z"
        fill="currentColor"
      />
      <path d="M11 1H13V5H11V1Z" fill="currentColor" data-color="color-2" />
      <path d="M16 2H18V6H16V2Z" fill="currentColor" data-color="color-2" />
      <path d="M6 2H8V6H6V2Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
