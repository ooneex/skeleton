import type { SVGProps } from "react";

export const PowerOffIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 17V3.00002"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M32 6.76129C38.4961 9.78103 43 16.3645 43 24C43 34.4934 34.4934 43 24 43C13.5066 43 5 34.4934 5 24C5 16.3645 9.50394 9.78103 16 6.76129"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
