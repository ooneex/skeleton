import type { SVGProps } from "react";

export const WalletIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M43 34H34.7857C31.5901 34 29 31.314 29 28C29 24.686 31.5901 22 34.7857 22H43"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24 13.0001H38C40.7614 13.0001 43 15.2386 43 18.0001V38C43 40.7615 40.7614 43 38 43H10C7.23858 43 5 40.7615 5 38V9V9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M23.6522 13H9C6.79086 13 5 11.2091 5 9V9C5 6.79086 6.79086 5 9 5H33C35.7614 5 38 7.23858 38 10V13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
