import type { SVGProps } from "react";

export const FileSearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M20 3V16H7" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" data-cap="butt" fill="none" />
      <path
        d="M41 27.5C41 20.4841 41 13.0308 41 7.99748C41 5.23605 38.7614 3 36 3H20.2426C19.447 3 18.6839 3.31607 18.1213 3.87868L7.87868 14.1213C7.31607 14.6839 7 15.4424 7 16.2381C7 20.4779 7 32.8718 7 40.0084C7 42.7699 9.23858 45 12 45H23.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M31.5 43C35.6421 43 39 39.6421 39 35.5C39 31.3579 35.6421 28 31.5 28C27.3579 28 24 31.3579 24 35.5C24 39.6421 27.3579 43 31.5 43Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M41.5 45.5L37 41L37.5 41.5"
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
