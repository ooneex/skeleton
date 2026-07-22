import type { SVGProps } from "react";

export const PinUserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5 12.8608C5 20.3063 16 30 16 30C16 30 27 20.327 27 12.8608C27 5.93653 21.362 2 16 2C10.638 2 5 5.93653 5 12.8608Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 12C17.3807 12 18.5 10.8807 18.5 9.5C18.5 8.11929 17.3807 7 16 7C14.6193 7 13.5 8.11929 13.5 9.5C13.5 10.8807 14.6193 12 16 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 15C13.2387 15 11 16.9901 11 19.4446C14.3331 20.1851 17.6669 20.1851 21 19.4446C21 16.9901 18.7613 15 16 15Z"
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
