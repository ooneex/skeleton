import type { SVGProps } from "react";

export const QuoteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9 7V5.58114C9 4.6369 9.60421 3.7986 10.5 3.5V3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M3 7V5.58114C3 4.6369 3.60421 3.7986 4.5 3.5V3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M21 15L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 3H17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 21L3 21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 9H17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M6 6H2V10H6V6Z" fill="currentColor" data-color="color-2" data-cap="butt" data-stroke="none" />
      <path d="M12 6H8V10H12V6Z" fill="currentColor" data-color="color-2" data-cap="butt" data-stroke="none" />
    </svg>
  );
};
