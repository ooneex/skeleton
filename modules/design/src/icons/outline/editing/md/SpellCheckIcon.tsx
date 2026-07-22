import type { SVGProps } from "react";

export const SpellCheckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M22.5 19H9.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M17 25L21 29L29 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M6.10558 28H6L15.3333 4H16.6667L23.2778 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
