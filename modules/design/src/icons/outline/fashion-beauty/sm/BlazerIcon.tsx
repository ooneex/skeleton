import type { SVGProps } from "react";

export const BlazerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 11.5L16.1933 3.04471" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M12 11.5L7.8205 3.05112" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M16.8736 5H22V21H2V5H7.08558"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M10 21V12.873L18 8.11111L15.8 2H8.2L6 8.11111L11.8779 11.5927L11.5839 11.4185"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M14 17V17.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
