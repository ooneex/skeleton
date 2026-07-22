import type { SVGProps } from "react";

export const OpenShelfDresserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 27V3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M5 11H27" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M5 19H27" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M5 27H27" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M5 29L5 6C5 4.34315 6.34315 3 8 3L24 3C25.6569 3 27 4.34315 27 6L27 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
