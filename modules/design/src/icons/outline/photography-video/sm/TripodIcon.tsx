import type { SVGProps } from "react";

export const TripodIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M5.5 22L12 14L18.5 22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 21V13V14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M18 11L18 6C18 4.89543 17.1046 4 16 4L15 4L14 2.5L10 2.5L9 4L8 4C6.89543 4 6 4.89543 6 6L6 11C6 12.1046 6.89543 13 8 13L16 13C17.1046 13 18 12.1046 18 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z"
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
