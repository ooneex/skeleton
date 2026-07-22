import type { SVGProps } from "react";

export const PurseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 15V18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M12 8V5C12 2.79086 13.7909 1 16 1V1C18.2091 1 20 2.79086 20 5V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M3 15H29" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M9.07109 29H22.9289C27.1888 29 30.461 25.2271 29.8586 21.01L28 8H16H4.00005L2.14144 21.01C1.539 25.2271 4.81124 29 9.07109 29Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
