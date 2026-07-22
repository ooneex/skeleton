import type { SVGProps } from "react";

export const TongueOutIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9 8V20C9 23.866 12.134 27 16 27V27C19.866 27 23 23.866 23 20V8"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M16 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M5 8H27" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M2.33333 4.22758C3.88692 4.77669 5 6.25834 5 7.99997C5 9.74159 3.88692 11.2232 2.33333 11.7724"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M29.6667 4.22761C28.1131 4.77672 27 6.25837 27 8C27 9.74163 28.1131 11.2233 29.6667 11.7724"
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
