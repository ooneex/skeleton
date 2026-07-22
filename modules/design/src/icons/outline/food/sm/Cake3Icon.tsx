import type { SVGProps } from "react";

export const Cake3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M2 16H22" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M12 12V8" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M4 21L20 21C21.1046 21 22 20.1046 22 19L22 14C22 12.8954 21.1046 12 20 12L4 12C2.89543 12 2 12.8954 2 14L2 19C2 20.1046 2.89543 21 4 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12 8C13.3808 8 14.5 6.95525 14.5 5.66638C14.5 4 12 2 12 2C12 2 9.5 4 9.5 5.66638C9.5 6.95438 10.6192 8 12 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
