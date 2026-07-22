import type { SVGProps } from "react";

export const KettleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M5 24H26" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M22.5 3H29V11C29 11.7956 28.719 12.5587 28.219 13.1213C27.7189 13.6839 27.0406 14 26.3333 14H24.5"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M22.629 3L26.412 25.5026C26.7197 27.3325 25.3091 29 23.4536 29H7.52568C5.67718 29 4.26847 27.3444 4.56436 25.5198L7 10.5L4 3.72222V3H22.629Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M14 15H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M14 11H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M14 19H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
