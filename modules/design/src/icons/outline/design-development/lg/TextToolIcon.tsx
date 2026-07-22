import type { SVGProps } from "react";

export const TextToolIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 33V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17 17H31"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M13 9H35" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M13 39H35" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M39 13L39 35" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M9 13L9 35" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M13 35H5V43H13V35Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M43 35H35V43H43V35Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M13 5H5V13H13V5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M43 5H35V13H43V5Z"
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
