import type { SVGProps } from "react";

export const IglooIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 7V12" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M15 7V12" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M12 3V7" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M21 12L3 12" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M21 17L16 17" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M3 17L8 17" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M8 21V16C8 13.7909 9.79086 12 12 12V12C14.2091 12 16 13.7909 16 16V21"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M12 3C7.02944 3 3 7.02944 3 12V21H21V12C21 7.02944 16.9706 3 12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M19.5 7L4.5 7" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
    </svg>
  );
};
