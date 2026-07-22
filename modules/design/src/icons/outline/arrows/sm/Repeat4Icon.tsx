import type { SVGProps } from "react";

export const Repeat4Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M15 6H16C19.314 6 22 8.686 22 12C22 15.314 19.314 18 16 18H14L16.5 20.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M9 18H8C4.686 18 2 15.314 2 12C2 8.686 4.686 6 8 6H10L7.5 3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
