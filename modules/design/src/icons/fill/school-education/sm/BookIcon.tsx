import type { SVGProps } from "react";

export const BookIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M6 18H5V20H3V4C3 2.34315 4.34315 1 6 1V18Z" fill="currentColor" data-color="color-2" />
      <path d="M19 18V22H17V18H19Z" fill="currentColor" />
      <path
        d="M3 20C3 18.3431 4.34315 17 6 17H21V19H6C5.44772 19 5 19.4477 5 20C5 20.5523 5.44772 21 6 21H21V23H6C4.34315 23 3 21.6569 3 20Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M21 18H8V1H21V18ZM11 11H18V6H11V11Z" fill="currentColor" />
    </svg>
  );
};
