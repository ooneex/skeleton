import type { SVGProps } from "react";

export const CurrencyDollarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M33.875 9H19.5C15.3579 9 12 12.3579 12 16.5V16.5C12 20.6421 15.3579 24 19.5 24H29.5C33.6421 24 37 27.3579 37 31.5V31.5C37 35.6421 33.6421 39 29.5 39H15.125"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M24 5V43"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
