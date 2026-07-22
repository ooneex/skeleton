import type { SVGProps } from "react";

export const ScaleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 5V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M12 21V5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M7 21H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M5.02893 5.05411L5 5L8.92 12.3333C8.92 14.3584 7.14705 16 4.96 16C2.77295 16 1 14.3584 1 12.3333L4.96 5H19.04L23 12.3333C23 14.3584 21.2271 16 19.04 16C16.853 16 15.08 14.3584 15.08 12.3333L19 5L18.9703 5.05553"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
