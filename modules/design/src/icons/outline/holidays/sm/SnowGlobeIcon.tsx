import type { SVGProps } from "react";

export const SnowGlobeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 21V17" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M3 21V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M8.5 17L12 11L15.5 17H8.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M9 8L9.00707 8.00707" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M15 8L15.0071 8.00707" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M17 12L17.0071 12.0071" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M7 12L7.00707 12.0071" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
