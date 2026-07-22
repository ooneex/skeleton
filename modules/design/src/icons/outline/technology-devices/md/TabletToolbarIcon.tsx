import type { SVGProps } from "react";

export const TabletToolbarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M23 26H9"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 6.75C7 5.7835 7.7835 5 8.75 5C9.7165 5 10.5 5.7835 10.5 6.75C10.5 7.7165 9.7165 8.5 8.75 8.5C7.7835 8.5 7 7.7165 7 6.75Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M25 2H7C5.34315 2 4 3.34315 4 5V27C4 28.6569 5.34315 30 7 30H25C26.6569 30 28 28.6569 28 27V5C28 3.34315 26.6569 2 25 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
