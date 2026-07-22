import type { SVGProps } from "react";

export const PiggyBankIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M3.44444 12.54L5 10.56V7L6.35102 6.61399C7.62619 6.24966 8.98927 6.76582 9.70328 7.88341L9.77778 8.00002H16.5C20.0899 8.00002 23 10.9102 23 14.5C23 18.0899 20.0898 21 16.5 21H8.24511C6.75299 21 5.33883 20.3336 4.389 19.1828L3 17.5L1 16.66V13.18L3.44444 12.54Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M8 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M17 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M11 12H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M11 1C11 2.65685 12.3431 4 14 4C15.6569 4 17 2.65685 17 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M6.5 16C7.32843 16 8 15.3284 8 14.5C8 13.6716 7.32843 13 6.5 13C5.67157 13 5 13.6716 5 14.5C5 15.3284 5.67157 16 6.5 16Z"
        fill="currentColor"
        data-stroke="none"
        data-cap="butt"
      />
    </svg>
  );
};
