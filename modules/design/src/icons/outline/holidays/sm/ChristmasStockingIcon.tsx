import type { SVGProps } from "react";

export const ChristmasStockingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5.5 14.5L11 20.5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M6 7V2H19V7H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M7.99999 7V12L5.29377 14.7062C3.73156 16.2684 3.67691 18.7839 5.16979 20.4125V20.4125C6.72601 22.1102 9.37069 22.2055 11.045 20.6241L16.0599 15.8879C16.6599 15.3212 17 14.5322 17 13.7069V7"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
