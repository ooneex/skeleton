import type { SVGProps } from "react";

export const WalletIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M29 23H23.8571C21.7267 23 20 21.2093 20 19C20 16.7907 21.7267 15 23.8571 15H29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 10H26C27.6569 10 29 11.3431 29 13V25C29 26.6569 27.6569 28 26 28H6C4.34315 28 3 26.6569 3 25L3 7V7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 10H6C4.34315 10 3 8.65685 3 7V7C3 5.34315 4.34315 4 6 4H23C24.6569 4 26 5.34315 26 7V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
