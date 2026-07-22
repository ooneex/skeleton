import type { SVGProps } from "react";

export const Bus2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 9H1" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M23.01 9H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M21 20V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V20C3 20.5523 3.44772 21 4 21H6C6.55228 21 7 20.5523 7 20V19H17V20C17 20.5523 17.4477 21 18 21H20C20.5523 21 21 20.5523 21 20Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M3 11H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 14H9.01C9.01 15.1046 8.11457 16 7.01 16H5V14Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.01 14H15C15 15.1046 15.8954 16 17 16H19.01V14Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
