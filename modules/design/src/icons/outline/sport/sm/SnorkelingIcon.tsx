import type { SVGProps } from "react";

export const SnorkelingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10 16V16C10 19.3137 12.6863 22 16 22V22C19.3137 22 22 19.3137 22 16V3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M1 6C1 4.89543 1.89543 4 3 4H16C17.1046 4 18 4.89543 18 6V9.05925C18 9.96181 17.3955 10.7525 16.5245 10.9892L12.8056 12L11.0766 9.7848C10.2759 8.75884 8.7241 8.75884 7.92336 9.7848L6.19444 12L2.47546 10.9892C1.6045 10.7525 1 9.96181 1 9.05925V6Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M8 16H12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
