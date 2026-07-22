import type { SVGProps } from "react";

export const CloudStreamingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4 28H17V31"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M28 28H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M26 12.5C26 12.677 25.983 12.849 25.974 13.024C28.789 13.265 31 15.622 31 18.5C31 21.538 28.538 24 25.5 24H7C3.686 24 1 21.314 1 18C1 15.386 2.675 13.168 5.008 12.346C5.091 6.619 9.753 2 15.5 2C21.299 2 26 6.701 26 12.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M13.5 11L20.5 15L13.5 19V11Z"
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
