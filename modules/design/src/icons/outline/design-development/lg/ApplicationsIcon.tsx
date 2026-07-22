import type { SVGProps } from "react";

export const ApplicationsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M21 7H8C5.23858 7 3 9.23857 3 12V38C3 40.7614 5.23857 43 8 43H34C36.7614 43 39 40.7614 39 38V25"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M21 7V43" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path d="M3 25L39 25" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path
        d="M38 3H26V20H43V8C43 5.23858 40.7614 3 38 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
