import type { SVGProps } from "react";

export const VibranceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 3.5L22 20H2L12 3.5Z" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M12 15C12.4142 15 12.75 14.6642 12.75 14.25C12.75 13.8358 12.4142 13.5 12 13.5C11.5858 13.5 11.25 13.8358 11.25 14.25C11.25 14.6642 11.5858 15 12 15Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
      />
    </svg>
  );
};
