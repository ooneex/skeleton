import type { SVGProps } from "react";

export const MouseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 2V9" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M5 13L5 19C5 25.0751 9.92487 30 16 30C22.0751 30 27 25.0751 27 19L27 13C27 6.92487 22.0751 2 16 2C9.92487 2 5 6.92487 5 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M13.5 11.5L13.5 13.5C13.5 14.8807 14.6193 16 16 16C17.3807 16 18.5 14.8807 18.5 13.5L18.5 11.5C18.5 10.1193 17.3807 9 16 9C14.6193 9 13.5 10.1193 13.5 11.5Z"
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
