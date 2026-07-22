import type { SVGProps } from "react";

export const ParagraphSpacingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M21 17L3 17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 2H3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 22L3 22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M9.99999 11.5L12 13.5L14 11.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M10 7.50001L12 5.5L14 7.5"
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
