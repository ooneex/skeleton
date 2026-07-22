import type { SVGProps } from "react";

export const CurrencyDollarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 8C5 5.23858 7.23858 3 10 3H17.2857L17.2857 5H10C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11H14C16.7614 11 19 13.2386 19 16C19 18.7614 16.7614 21 14 21H6.71429V19H14C15.6569 19 17 17.6569 17 16C17 14.3431 15.6569 13 14 13H10C7.23858 13 5 10.7614 5 8Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 1V23H11V1H13Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
