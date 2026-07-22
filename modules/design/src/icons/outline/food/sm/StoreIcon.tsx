import type { SVGProps } from "react";

export const StoreIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 21V16H16V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M20 14V19C20 20.1046 19.1046 21 18 21H16M4 14V19C4 20.1046 4.89543 21 6 21H12"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M19 5L22 8V10H2V8L5 5V3H19V5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M9 15H7V17H9V15Z" fill="currentColor" data-cap="butt" data-stroke="none" />
    </svg>
  );
};
