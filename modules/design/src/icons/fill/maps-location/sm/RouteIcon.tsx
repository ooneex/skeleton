import type { SVGProps } from "react";

export const RouteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 3H18C20.7614 3 23 5.23858 23 8C23 10.7614 20.7614 13 18 13H15.7394V11H18C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5H10V3Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 13C4.34315 13 3 14.3431 3 16C3 17.6569 4.34315 19 6 19H20V21H6C3.23858 21 1 18.7614 1 16C1 13.2386 3.23858 11 6 11H8.5V13H6Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 16.5857L21.4142 19.9999L18 23.4141L16.5858 21.9999L18.5858 19.9999L16.5858 17.9999L18 16.5857Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 3H8V5H4V3Z" fill="currentColor" />
    </svg>
  );
};
