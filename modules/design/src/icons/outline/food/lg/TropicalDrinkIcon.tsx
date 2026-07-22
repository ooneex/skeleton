import type { SVGProps } from "react";

export const TropicalDrinkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10 3H18L21.4 20H22.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M10.0071 20H34.0096" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M34 20C38.4183 20 42 16.4183 42 12C42 7.58172 38.4183 4 34 4C29.5817 4 26 7.58172 26 12"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M10 12V23C10 29.6274 15.3726 35 22 35C28.6274 35 34 29.6274 34 23V12H10Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M22 35V45" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M15 45H29" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
