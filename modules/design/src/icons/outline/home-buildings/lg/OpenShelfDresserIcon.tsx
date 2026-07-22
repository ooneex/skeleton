import type { SVGProps } from "react";

export const OpenShelfDresserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 36V3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M7 25H41" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M7 36H41" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M7 14H41" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M7 45L7 8C7 5.23858 9.23858 3 12 3L36 3C38.7614 3 41 5.23858 41 8.00001L41 45"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
