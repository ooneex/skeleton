import type { SVGProps } from "react";

export const MobileIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4.99999 4L4.99999 20C4.99999 21.1046 5.89542 22 6.99999 22L17 22C18.1046 22 19 21.1046 19 20L19 4C19 2.89543 18.1046 2 17 2L6.99999 2C5.89542 2 4.99999 2.89543 4.99999 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M13.4397 5.12062L10.5603 5.12062C10.527 5.12062 10.5 5.09362 10.5 5.06031C10.5 5.027 10.527 5 10.5603 5L13.4397 5C13.473 5 13.5 5.027 13.5 5.06031C13.5 5.09362 13.473 5.12062 13.4397 5.12062Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M10 18H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
