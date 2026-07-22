import type { SVGProps } from "react";

export const LetterBIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7.5 10C6.94772 10 6.5 10.4477 6.5 11C6.5 11.5523 6.94772 12 7.5 12V10ZM7 21V22H14V21V20H7V21ZM14 11V10H7.5V11V12H14V11ZM19 16H20C20 12.6863 17.3137 10 14 10V11V12C16.2091 12 18 13.7909 18 16H19ZM14 21V22C17.3137 22 20 19.3137 20 16H19H18C18 18.2091 16.2091 20 14 20V21Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M7 21V3H13C15.2091 3 17 4.79086 17 7V7C17 9.20914 15.2091 11 13 11H7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
