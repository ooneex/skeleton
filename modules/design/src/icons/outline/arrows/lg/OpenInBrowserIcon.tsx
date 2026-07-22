import type { SVGProps } from "react";

export const OpenInBrowserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M15 41H8C5.23858 41 3 38.7614 3 36V12C3 9.23858 5.23858 7 8 7H40C42.7614 7 45 9.23858 45 12V36C45 38.7614 42.7614 41 40 41H33"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M3 15H45" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" fill="none" data-cap="butt" />
      <path
        d="M24 41V21.9999V22.4999"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M33 31L24 22L15 31"
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
