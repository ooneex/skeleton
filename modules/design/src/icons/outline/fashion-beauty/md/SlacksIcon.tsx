import type { SVGProps } from "react";

export const SlacksIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M26 15L21 13V7" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M6 15L11 13V7" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M16 7V2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M6 7H26" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M26 30H19.5L17 14H15L12.5 30H6V2H26V30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};
