import type { SVGProps } from "react";

export const BasketballNetIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M10 31L23 16H24H25L38 30" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M10 31L23 45H24H25L38 31" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M6 5H42C43.6569 5 45 6.34315 45 8C45 9.65685 43.6569 11 42 11H6C4.34315 11 3 9.65685 3 8C3 6.34315 4.34315 5 6 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24 30.69L36.6641 44H37.5227L37.4899 42.2413C37.3383 34.1205 38.3246 26.0184 40.4202 18.1711L41 16H40.1414L24 30.69ZM24 30.69L7.85859 16H7L9.73864 30L10.4773 44H11.3359L24 30.69Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
