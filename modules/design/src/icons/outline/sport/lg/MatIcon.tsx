import type { SVGProps } from "react";

export const MatIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M21 14H39C39.5523 14 40 14.4477 40 15V36C40 37.1046 39.1046 38 38 38H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M21.375 43L40 43C42.7614 43 45 40.7614 45 38L45 14C45 11.2386 42.7614 9.00001 40 9L16.5 9L17.25 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M3 36L3.00001 9.49992C3.00001 5.91007 5.91016 2.99993 9.5 2.99993V2.99993C13.0899 2.99993 16 5.91008 16 9.49993L16 36"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16 38L16 35.5C16 31.9101 13.0899 29 9.5 29V29C5.91015 29 3 31.9101 3 35.5L3 36C3 39.866 6.13401 43 10 43L24 43"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
