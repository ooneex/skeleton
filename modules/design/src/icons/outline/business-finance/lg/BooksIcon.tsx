import type { SVGProps } from "react";

export const BooksIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="5" y="5" width="12" height="40" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path d="M17 12H29V45H17V12Z" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path d="M5 36H17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M17 40H29" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M11 11L11 21.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M23 18L23 28.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <rect
        x="29.4382"
        y="5.82373"
        width="10"
        height="40"
        transform="rotate(-7.5 29.4382 5.82373)"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M35.1727 11.1206L36.4779 21.0351"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
