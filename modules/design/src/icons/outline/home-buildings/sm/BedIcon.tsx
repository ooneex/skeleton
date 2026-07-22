import type { SVGProps } from "react";

export const BedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M2 18H22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M2 9H7C8.65685 9 10 10.3431 10 12V13"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M2 13H22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M2 5L2 20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M22 11L22 20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
