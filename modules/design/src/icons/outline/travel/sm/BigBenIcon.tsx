import type { SVGProps } from "react";

export const BigBenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M22 16L16 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M8 22V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M13 6V5.57143L8 2.5L3 5.57143V6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M13 2V14H3V2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 14V22H4V14" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path d="M12 22H22V14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M18 22V14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
