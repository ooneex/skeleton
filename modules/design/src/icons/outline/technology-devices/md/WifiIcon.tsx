import type { SVGProps } from "react";

export const WifiIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M20.9497 22.0503L16 27L11.0502 22.0503C12.317 20.7835 14.067 20 16 20C17.933 20 19.683 20.7835 20.9497 22.0503Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M29.435 13.565C25.9967 10.1266 21.2467 8 16 8C10.7533 8 6.00327 10.1266 2.56494 13.565"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M25.1923 17.8076C22.8398 15.4551 19.5898 14 15.9999 14C12.4101 14 9.16009 15.4551 6.80756 17.8076"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
