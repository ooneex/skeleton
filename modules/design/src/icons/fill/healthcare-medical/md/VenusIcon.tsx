import type { SVGProps } from "react";

export const VenusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17 18V31H15V18H17Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M10 24H22V26H10V24Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 10.5C6.5 5.25329 10.7533 1 16 1C21.2467 1 25.5 5.25329 25.5 10.5C25.5 15.7467 21.2467 20 16 20C10.7533 20 6.5 15.7467 6.5 10.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
