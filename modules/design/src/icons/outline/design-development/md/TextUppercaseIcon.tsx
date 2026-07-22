import type { SVGProps } from "react";

export const TextUppercaseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3 20H14" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M1.59679 25H1.5L7.72222 6H9.27778L15.5 25H15.4036"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M26 17H30V25H26.5C21.2533 25 17 20.7467 17 15.5V15.5C17 10.2533 21.2533 6 26.5 6H29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
