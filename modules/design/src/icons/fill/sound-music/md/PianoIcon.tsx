import type { SVGProps } from "react";

export const PianoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M14 6H10V4H14V6Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 6H18V4H22V6Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M25 20V28H23V20H25Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 20V28H15V20H17Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M9 20V28H7V20H9Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 4C29.2091 4 31 5.79086 31 8L31 24C31 26.2091 29.2091 28 27 28L5 28C2.79086 28 0.999999 26.2091 0.999999 24L1 8C1 5.79086 2.79086 4 5 4L7 4L7 6L5 6C3.89543 6 3 6.89543 3 8L3 24C3 25.1046 3.89543 26 5 26L27 26C28.1046 26 29 25.1046 29 24L29 8C29 6.89543 28.1046 6 27 6L25 6L25 4L27 4Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M10 2L10 18L6 18L6 2L10 2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M26 2L26 18L22 18L22 2L26 2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M18 2L18 18L14 18L14 2L18 2Z" fill="currentColor" />
    </svg>
  );
};
