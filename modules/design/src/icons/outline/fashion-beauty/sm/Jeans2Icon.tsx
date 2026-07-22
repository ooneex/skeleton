import type { SVGProps } from "react";

export const Jeans2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13.5 18H20" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M4 18H10.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M16 2V4C16 5.65685 17.3431 7 19 7H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M8 2V4C8 5.65685 6.65685 7 5 7H4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M20 22H14L12.5 10H11.5L10 22H4V2H20V22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M12 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
