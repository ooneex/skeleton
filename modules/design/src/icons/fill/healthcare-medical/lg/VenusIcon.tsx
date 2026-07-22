import type { SVGProps } from "react";

export const VenusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5 27.5V47.5H22.5V27.5H25.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 36.5H33.5V39.5H14.5V36.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 15.5C9.5 7.49187 15.9919 1 24 1C32.0081 1 38.5 7.49187 38.5 15.5C38.5 23.5081 32.0081 30 24 30C15.9919 30 9.5 23.5081 9.5 15.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
