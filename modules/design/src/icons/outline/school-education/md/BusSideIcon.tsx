import type { SVGProps } from "react";

export const BusSideIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M14 12V4" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M29 10V11H31V10H29ZM25.6478 8H28V6H25.6478V8ZM29 9V10H31V9H29ZM25.6478 8H26.3145V6H25.6478V8ZM28 8C28.5523 8 29 8.44771 29 9H31C31 7.34315 29.6569 6 28 6V8Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M3 12H14.5L18.5 17H27.5H26.8333"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M13.6667 25H15H3V19H9V24.7595"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M3 4H21.0961C23.3905 4 25.3904 5.56149 25.9468 7.78733L26.7211 10.8844C27.3477 13.3907 27.582 15.9791 27.4157 18.5573L27.0604 24.0644C27.0264 24.5906 26.5897 25 26.0624 25H22H22.6667"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M18.5 28.5C20.4331 28.5 22 26.9331 22 25C22 23.0669 20.4331 21.5 18.5 21.5C16.5669 21.5 15 23.0669 15 25C15 26.9331 16.5669 28.5 18.5 28.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
