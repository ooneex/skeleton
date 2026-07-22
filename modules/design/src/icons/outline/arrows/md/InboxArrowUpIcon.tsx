import type { SVGProps } from "react";

export const InboxArrowUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M8 4L7.02821 4C5.57636 4 4.33286 5.03965 4.07566 6.46854L2 18L2 25C2 26.6569 3.34315 28 5 28L27 28C28.6569 28 30 26.6569 30 25L30 18L27.9243 6.46854C27.6671 5.03965 26.4236 4 24.9718 4L24 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M2 18H10V23H22V18H30"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M16 15V3V3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M10 9L16 3L22 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
