import type { SVGProps } from "react";

export const LadderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3 24H17" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M4.5 17H18.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M6 10H20" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M17.5 22H28.5" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M20.5714 3H22H9.86293C8.44221 3 7.2163 3.99655 6.92616 5.38732L2 29H2.03009"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16.0277 29H16L21.4008 3.00797C21.4017 3.00333 21.4058 3 21.4105 3H22.122C23.5421 3 24.7676 3.99561 25.0584 5.38553L30 29H29.9684"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
