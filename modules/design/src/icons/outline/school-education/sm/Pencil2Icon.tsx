import type { SVGProps } from "react";

export const Pencil2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M8.5 3L8.5 9.00919V8.51303"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M15.5 3L15.5 9.03281V8.64298"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M4 13L8.5 9L12 12L15.5 9L20 13" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M9 18.5L9.31672 17.8666C10.4223 15.6554 13.5777 15.6554 14.6833 17.8666L15 18.5"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M4 3V13L12 22L20 13V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
