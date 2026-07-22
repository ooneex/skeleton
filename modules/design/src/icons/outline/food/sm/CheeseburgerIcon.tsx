import type { SVGProps } from "react";

export const CheeseburgerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M21 11V10C21 6.134 17.866 3 14 3H10C6.134 3 3 6.134 3 10V11"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M21 11L3 11C1.89543 11 1 11.8954 1 13C1 14.1046 1.89543 15 3 15L11.5 15L14.5 18L17.5 15L21 15C22.1046 15 23 14.1046 23 13C23 11.8954 22.1046 11 21 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M20.8293 19C20.4176 20.1653 19.3064 21 18 21H6.00001C4.69366 21 3.58247 20.1653 3.17068 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M15.0011 7.00098L15.0085 7.00854"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M9 7.00098L9.00743 7.00854" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
