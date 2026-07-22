import type { SVGProps } from "react";

export const BroomIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M10 7H14" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M10 11V4C10 2.89543 10.8954 2 12 2V2C13.1046 2 14 2.89543 14 4L14 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M4.01199 19.4526L9.54017 11H14.461L19.9882 19.4527C20.4231 20.1178 19.946 21 19.1513 21H4.8489C4.05419 21 3.57701 20.1177 4.01199 19.4526Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M10 21V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M14 21V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
