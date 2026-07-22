import type { SVGProps } from "react";

export const PineappleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M8 21L19 11.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M5 17L16 7.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M16 21L5 11.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M19 17L8 7.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M15.5 7.5C16.8846 7.5 18 5.0698 18 4C18 4 16.0621 4 14.5 4C13.5177 1.56105 12 1.06671 12 1.06671C12 1.06671 10.4823 1.56105 9.5 4C7.9379 4 6 4 6 4C6 5.0189 7.11538 7.5 8.5 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M19 16V13C19 9.68629 16.3137 7 13 7H11C7.68629 7 5 9.68629 5 13V16C5 19.3137 7.68629 22 11 22H13C16.3137 22 19 19.3137 19 16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
