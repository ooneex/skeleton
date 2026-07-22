import type { SVGProps } from "react";

export const OpenShelfDresserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 18V3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M4 13H20" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M4 18H20" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M4 8H20" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M4 21L4 5C4 3.89543 4.89543 3 6 3L18 3C19.1046 3 20 3.89543 20 5L20 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
