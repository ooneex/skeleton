import type { SVGProps } from "react";

export const FilesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 12V6C24 4.34315 22.6569 3 21 3H12.2426C11.447 3 10.6839 3.31607 10.1213 3.87868L3.87868 10.1213C3.31607 10.6839 3 11.447 3 12.2426V24C3 25.6569 4.34315 27 6 27H8"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M17 12V21H8" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" data-cap="butt" fill="none" />
      <path
        d="M8 29V21.2426C8 20.447 8.31607 19.6839 8.87868 19.1213L15.1213 12.8787C15.6839 12.3161 16.447 12 17.2426 12H26C27.6569 12 29 13.3431 29 15V29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M18 27L13 27"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24 27L22 27"
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
