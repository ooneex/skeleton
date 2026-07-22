import type { SVGProps } from "react";

export const NumberFiveIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 3H7V10H11.5C14.5376 10 17 12.4624 17 15.5V15.5C17 18.5376 14.5376 21 11.5 21H7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
