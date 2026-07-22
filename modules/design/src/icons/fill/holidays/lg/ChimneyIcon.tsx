import type { SVGProps } from "react";

export const ChimneyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M40 44H33V37H40V44Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 4V14H4V4H44ZM9 7V8C9 10.2091 10.7909 12 13 12C15.2091 12 17 10.2091 17 8V7H9ZM26 7V7.5C26 9.433 27.567 11 29.5 11C30.341 11 31.1145 10.7231 31.7188 10.2861C32.4417 11.3218 33.6412 12 35 12C37.2091 12 39 10.2091 39 8V7H26Z"
        fill="currentColor"
      />
      <path d="M15 44H8V37H15V44Z" fill="currentColor" data-color="color-2" />
      <path d="M30 44H18V37H30V44Z" fill="currentColor" />
      <path d="M22.5 34H8V27H22.5V34Z" fill="currentColor" />
      <path d="M15 24H8V17H15V24Z" fill="currentColor" data-color="color-2" />
      <path d="M30 24H18V17H30V24Z" fill="currentColor" />
      <path d="M40 24H33V17H40V24Z" fill="currentColor" />
      <path d="M40 34H25.5V27H40V34Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
