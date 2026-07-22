import type { SVGProps } from "react";

export const CoffeeBeansIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M11.5 2C14 6 14.1142 8.6173 12 12C9.88583 15.3827 10 18 12.5 22"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M4 12C4 17.5228 7.58172 22 12 22C16.4183 22 20 17.5228 20 12C20 6.47715 16.4183 2 12 2C7.58172 2 4 6.47715 4 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
