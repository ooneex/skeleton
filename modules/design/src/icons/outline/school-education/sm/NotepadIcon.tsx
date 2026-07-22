import type { SVGProps } from "react";

export const NotepadIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M4 4V22H20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M8 6V3.06187L8.42229 2.85073C10.6745 1.72462 13.3255 1.72462 15.5777 2.85073L16 3.06187V6H8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M8 12H11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M8 16H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
