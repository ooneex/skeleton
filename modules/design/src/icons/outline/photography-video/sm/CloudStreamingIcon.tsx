import type { SVGProps } from "react";

export const CloudStreamingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M23 13C23 15.2 21.2 17 19 17H5C2.8 17 1 15.2 1 13C1 11.1 2.3 9.5 4 9.1C4.2 5.2 7.5 2 11.5 2C15.5 2 18.7 5.1 19 9C21.2 9 23 10.8 23 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M3 21H12V23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M21 21H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M9.5 7L15.5 10.5L9.5 14V7Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
