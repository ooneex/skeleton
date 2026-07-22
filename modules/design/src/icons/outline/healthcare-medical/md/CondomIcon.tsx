import type { SVGProps } from "react";

export const CondomIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10 25L10 12C10 9.5785 11.4345 7.49204 13.5 6.54404L13.7791 3.98777C13.9049 2.85613 14.8614 2 16 2C17.1386 2 18.0951 2.85613 18.2209 3.98777L18.5 6.54404C20.5655 7.49204 22 9.5785 22 12V25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M22 29H10C8.89543 29 8 28.1046 8 27C8 25.8954 8.89543 25 10 25H22C23.1046 25 24 25.8954 24 27C24 28.1046 23.1046 29 22 29Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
