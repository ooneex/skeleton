import type { SVGProps } from "react";

export const DiamondIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12.0738 20.8386L16 9"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16.3537 8.95921L19 3"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M9 9L11.5 3" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M8 9L11.911 20.8386"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M12.5 3L15 9" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M5 3L7.68641 9.01149" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M22 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M22.5714 9L12 21L1.42857 9L4.99999 3H19L22.5714 9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
