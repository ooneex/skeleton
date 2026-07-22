import type { SVGProps } from "react";

export const RefreshIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M29.5 16C29.5 8.54416 23.4558 2.5 16 2.5C10.9006 2.5 6.46153 5.32737 4.16497 9.5L4.21542 9.40917"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M3.5 2.5V9.5H10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M2.5 16C2.5 23.4558 8.54416 29.5 16 29.5C21.0994 29.5 25.5385 26.6726 27.835 22.5L27.7846 22.5908"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M28.5 29.5V22.5H21.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
