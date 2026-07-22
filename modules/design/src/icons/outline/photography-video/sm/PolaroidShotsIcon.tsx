import type { SVGProps } from "react";

export const PolaroidShotsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M17 19L17 9C17 7.89543 16.1046 7 15 7L5 7C3.89543 7 3 7.89543 3 9L3 19C3 20.1046 3.89543 21 5 21L15 21C16.1046 21 17 20.1046 17 19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M21 16L21 8C21 5.23858 18.7614 3 16 3L8 3"
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
