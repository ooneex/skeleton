import type { SVGProps } from "react";

export const PyramidsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M13.5 11L11 12L11.339 11.8644"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M4.40401 13.303L4.25536 13.1915L5.54945 14.1621"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M10 22L12 3" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M19.1885 12.6557L19.5 12.5L17.5 13.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M2 16L10 22L22 16L12 3L2 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
