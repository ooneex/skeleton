import type { SVGProps } from "react";

export const SmoothieIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M6.86574 6.89353C6.31631 7.79967 6 8.86288 6 9.99997V11L7 22H17L18 11V9.99997C18 6.68626 15.3137 3.99997 12 3.99997C11.4815 3.99997 10.9783 4.06575 10.4984 4.18942L10.4189 3.68066"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M7 1H10L12.5 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M4 11H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
