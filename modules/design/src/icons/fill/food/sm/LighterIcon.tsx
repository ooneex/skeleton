import type { SVGProps } from "react";

export const LighterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 13V11H17V13H9Z" fill="currentColor" />
      <path d="M20 20C20 21.6569 18.6569 23 17 23H8C6.34315 23 5 21.6569 5 20V12H20V20Z" fill="currentColor" />
      <path d="M6 1V14H4C2.34315 14 1 12.6569 1 11V4C1 2.34315 2.34315 1 4 1H6Z" fill="currentColor" />
      <path
        d="M13 9C14.611 9 15.9167 7.78113 15.9167 6.27744C15.9167 4.33333 13 2 13 2C13 2 10.0833 4.33333 10.0833 6.27744C10.0833 7.7801 11.389 9 13 9Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
