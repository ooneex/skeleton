import type { SVGProps } from "react";

export const SofaIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 5V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M4 10L4 7C4 5.89543 4.89543 5 6 5L18 5C19.1046 5 20 5.89543 20 7L20 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M5 19V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M19 19V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M4 19L20 19C21.1046 19 22 18.1046 22 17L22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12L18 14L6 14L6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12L2 17C2 18.1046 2.89543 19 4 19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
