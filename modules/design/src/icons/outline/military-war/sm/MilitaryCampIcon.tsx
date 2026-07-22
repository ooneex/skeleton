import type { SVGProps } from "react";

export const MilitaryCampIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 6V1H15V2H12.0822"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M3 11H21" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M7 15V15.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17 15V15.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17 21C13.5 18.5 12 15.5571 12 12C12 15.5571 10.5 18.5 7 21H3V8C3 6.89543 3.89543 6 5 6H19C20.1046 6 21 6.89543 21 8V21H17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
