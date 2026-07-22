import type { SVGProps } from "react";

export const Bus2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 19H21V20C21 21.1046 21.8954 22 23 22H26V19Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 19H11V20C11 21.1046 10.1046 22 9 22H6V19Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M31 12H29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M3 12H1" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M29 27.5V6C29 4.34315 27.6569 3 26 3H6C4.34315 3 3 4.34315 3 6V27.5C3 28.3284 3.67157 29 4.5 29H7.5C8.32843 29 9 28.3284 9 27.5V26H23V27.5C23 28.3284 23.6716 29 24.5 29H27.5C28.3284 29 29 28.3284 29 27.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M3 15H29" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
