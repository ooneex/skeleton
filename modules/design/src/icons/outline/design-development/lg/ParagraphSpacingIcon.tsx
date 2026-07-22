import type { SVGProps } from "react";

export const ParagraphSpacingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M43 35L5 35" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M43 5L5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M43 43L5 43" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M19 24L24 29L29 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M19 16L24 11L29 16"
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
