import type { SVGProps } from "react";

export const EmptyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10.5 37.3697L10.5634 37.4335C7.12602 33.9953 5 29.2459 5 24C5 13.5066 13.5066 5 24 5C29.2798 5 34.0567 7.15359 37.5 10.6303L37.437 10.5669"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M4 44L44 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M40.5 14.5728C42.0907 17.3509 43 20.5693 43 24C43 34.4934 34.4934 43 24 43C20.5693 43 17.3509 42.0907 14.5728 40.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
