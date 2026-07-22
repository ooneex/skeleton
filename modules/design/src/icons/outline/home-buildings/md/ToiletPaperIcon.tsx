import type { SVGProps } from "react";

export const ToiletPaperIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18 23V29H4V13.3333"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M10 3H24C27.3137 3 30 7.47715 30 13C30 18.5228 27.3137 23 24 23H10"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M10 23C13.3137 23 16 18.5228 16 13C16 7.47715 13.3137 3 10 3C6.68629 3 4 7.47715 4 13C4 18.5228 6.68629 23 10 23Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M10 16.5C11.1046 16.5 12 14.933 12 13C12 11.067 11.1046 9.5 10 9.5C8.89543 9.5 8 11.067 8 13C8 14.933 8.89543 16.5 10 16.5Z"
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
