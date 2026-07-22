import type { SVGProps } from "react";

export const MedicalCross2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M10 10L10 7H14L14 10H17L17 14H14L14 17H10L10 14H7.00001L7 10H10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
