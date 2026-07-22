import type { SVGProps } from "react";

export const AirportIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11.5 5V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M27 43V34" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M37 38V35" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M7 23H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M7 38H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M32 43V34H22V43"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 27H38C40.7614 27 43 29.2386 43 32V43H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M16 18L16 43H7L7 18" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M19.7737 15.9236L20.6093 11.0639C20.83 9.78032 20.0283 8.54235 18.7668 8.21867L14.6667 7.16667L13.875 5H11.5H9.125L8.33333 7.16667L4.23322 8.21867C2.97169 8.54235 2.16999 9.78032 2.3907 11.0639L3.22631 15.9236C3.43259 17.1233 4.47291 18 5.69016 18H17.3098C18.5271 18 19.5674 17.1233 19.7737 15.9236Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M9 13H14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
