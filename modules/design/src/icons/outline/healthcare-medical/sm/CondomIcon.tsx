import type { SVGProps } from "react";

export const CondomIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7 21V9.38304C7 7.66132 8.10172 6.13276 9.73509 5.5883L10 5.5L10.2879 3.48492C10.4096 2.63288 11.1393 2 12 2V2C12.8607 2 13.5904 2.63288 13.7121 3.48492L14 5.5L14.2649 5.5883C15.8983 6.13276 17 7.66132 17 9.38304V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M5 21H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
