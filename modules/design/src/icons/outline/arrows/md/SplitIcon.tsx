import type { SVGProps } from "react";

export const SplitIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M2 16H9.82503L15.008 23.6784C15.5657 24.5047 16.4976 25 17.4945 25H30H29.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M2 16H9.82503L15.008 8.32158C15.5657 7.49526 16.4976 7 17.4945 7H30H29.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M25.5 20.5L30 25L25.5 29.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M25.5 2.5L30 7L25.5 11.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
