import type { SVGProps } from "react";

export const CoffeeBeansIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M15.328 2C18.6882 7.6 18.8417 11.2642 16 16C13.1583 20.7358 13.3118 24.4 16.6721 30"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M5 16C5 23.732 9.92487 30 16 30C22.0751 30 27 23.732 27 16C27 8.26801 22.0751 2 16 2C9.92487 2 5 8.26801 5 16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
