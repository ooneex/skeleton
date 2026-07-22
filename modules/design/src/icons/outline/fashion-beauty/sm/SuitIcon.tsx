import type { SVGProps } from "react";

export const SuitIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 21V16" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M16.3045 3.03906L12 10L7.69147 3.03906"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M12 16V9.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M17.1526 5H22V21H2V5H6.82362"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M15.8 2L18.5 8L16 10.5368L16.366 12.3889L12 16.5L7.36603 12.3889L8.2 10.5368L5.5 8L8.2 2H15.8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M18 17H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
