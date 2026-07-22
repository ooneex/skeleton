import type { SVGProps } from "react";

export const WineGlassIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 22V30" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M7 11H25" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M7 3V13C7 17.9706 11.0294 22 16 22C20.9706 22 25 17.9706 25 13V3H7Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M11 30L21 30" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
