import type { SVGProps } from "react";

export const SignatureIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M8.5 26V29" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M8.5 3V4.00001" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M13 9.00001L17 9V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M5 18L5 22.5C5 24.433 6.567 26 8.5 26V26C10.433 26 12 24.433 12 22.5V18"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M4 8.5C4 6.01472 6.01472 4 8.5 4V4C10.9853 4 13 6.01472 13 8.5V18H4L4 8.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M15 29C17.3065 23.5753 19.7034 21.6077 21.1369 22.0581C22.5131 22.4905 22.0479 27.1219 23.571 27.4053C24.6458 27.6052 25.5976 25.2199 26.754 25.5175C27.7642 25.7775 27.5818 27.4384 28.6884 27.7819C29.1128 27.9136 29.571 27.7819 30 27.5401"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};
