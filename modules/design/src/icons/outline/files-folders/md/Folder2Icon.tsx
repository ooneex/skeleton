import type { SVGProps } from "react";

export const Folder2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M30 15V25C30 26.6568 28.6569 28 27 28H5"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M27 11V10C27 8.34315 25.6569 7 24 7H15.86L12.08 4H5C3.34315 4 2 5.34315 2 7V25C2 26.6569 3.34315 28 5 28V28C6.65685 28 8 26.6569 8 25V15H30"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
