import type { SVGProps } from "react";

export const SignboardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M10.5 21H27.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M6.92978 4.33333L6.66663 3L12 29H11.9397"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M28.8484 29H29L24.0001 3H6.50003L1.92925 25H2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12.2368 8H20.3618L22 15.5H13.9657L12.2368 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
