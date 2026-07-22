import type { SVGProps } from "react";

export const WalletIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M21 17H18C16.343 17 15 15.657 15 14C15 12.343 16.343 11 18 11H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12 7H19C20.1046 7 21 7.89543 21 9V13.5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5V5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M17 3H5C3.89543 3 3 3.89543 3 5V5C3 6.10457 3.89543 7 5 7H12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
