import type { SVGProps } from "react";

export const FarmIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3 8H14" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M18.5 18V16.5C18.5 15.1193 19.6193 14 21 14V14C22.3807 14 23.5 15.1193 23.5 16.5V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M9 21H3H3.66667"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17 29V22H25V29"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M13 22L13 29H29V22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M9 29H3V7.5C3 4.46243 5.46243 2 8.5 2V2C11.5376 2 14 4.46243 14 7.5V12.0091V11.6256"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M28.1406 11.9995L21 9L13.8627 12L13 18L21 18L29 18L28.1406 11.9995Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
