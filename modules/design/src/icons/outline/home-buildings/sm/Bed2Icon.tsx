import type { SVGProps } from "react";

export const Bed2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M2 18H22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M22 13V10C22 8.34315 20.6569 7 19 7H12V13"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M2 13H22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M2 5L2 20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M22 13L22 20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M7 10C6.171 10 5.5 9.329 5.5 8.5C5.5 7.671 6.171 7 7 7C7.829 7 8.5 7.671 8.5 8.5C8.5 9.329 7.829 10 7 10Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
      />
    </svg>
  );
};
