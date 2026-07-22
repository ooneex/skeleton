import type { SVGProps } from "react";

export const MedicalClipboardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 5H12C9.23858 5 7 7.23858 7 10V40C7 42.7614 9.23858 45 12 45H36C38.7614 45 41 42.7614 41 40V10C41 7.23858 38.7614 5 36 5H32"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 8V4.5C16 3.11929 17.1193 2 18.5 2H29.5C30.8807 2 32 3.11929 32 4.5V8H16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M21 23L21 17H27L27 23H33L33 29H27V35H21V29H15L15 23H21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
