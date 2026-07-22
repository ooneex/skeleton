import type { SVGProps } from "react";

export const FoodScaleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 17V15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 3V7" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M4 15V21H20V15C20 10.5817 16.4183 7 12 7C7.58172 7 4 10.5817 4 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M3 3H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M12 11C9.79086 11 8 12.7909 8 15V17H16V15C16 12.7909 14.2091 11 12 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
