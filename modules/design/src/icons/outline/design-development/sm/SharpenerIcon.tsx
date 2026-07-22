import type { SVGProps } from "react";

export const SharpenerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9 22L9 17.5C9 15.8431 10.3431 14.5 12 14.5V14.5C13.6569 14.5 15 15.8431 15 17.5V22"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M4 22L20 22L20 16L19.6437 15.7862C18.3138 14.9883 17.5 13.551 17.5 12C17.5 10.449 18.3138 9.01174 19.6437 8.21376L20 8L20 2L4 2L4 8L4.35627 8.21376C5.68623 9.01174 6.5 10.449 6.5 12C6.5 13.551 5.68623 14.9883 4.35627 15.7862L4 16L4 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
