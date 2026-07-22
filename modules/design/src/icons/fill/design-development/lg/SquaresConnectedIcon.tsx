import type { SVGProps } from "react";

export const SquaresConnectedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 2H16V16H2V2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M32 32H46V46H32V32Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 19V34C10.5 35.933 12.067 37.5 14 37.5H29V40.5H14C10.4101 40.5 7.5 37.5899 7.5 34V19H10.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 7.5H34C37.5898 7.5 40.5 10.4101 40.5 14V29H37.5V14C37.5 12.067 35.933 10.5 34 10.5H19V7.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
