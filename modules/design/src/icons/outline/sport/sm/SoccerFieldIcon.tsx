import type { SVGProps } from "react";

export const SoccerFieldIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 10V4" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M12 20V14" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M22 9H18V15H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M2 9H6V15H2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <rect x="2" y="4" width="20" height="16" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
