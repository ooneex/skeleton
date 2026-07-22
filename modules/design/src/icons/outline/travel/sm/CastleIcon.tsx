import type { SVGProps } from "react";

export const CastleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M2 17V15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M6 17H2V21H6" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M22 17V15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M18 17H22V21H18" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M10 21V17C10 15.8954 10.8954 15 12 15V15C13.1046 15 14 15.8954 14 17V21"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M8 5V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 5V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M16 5V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M4 5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M4 3V10H20V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M6 10V21H18V10" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
    </svg>
  );
};
