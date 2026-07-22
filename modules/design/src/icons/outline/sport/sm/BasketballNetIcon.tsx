import type { SVGProps } from "react";

export const BasketballNetIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M2 3H22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M19.4886 15H19L12.4444 22H11.5556L5 15H4.53796"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M5 15L11.5556 8H12.4444L19 15" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M20 7L19 22H18.5556L4.44444 7H4L5 22H5.44444L19.5556 7H20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
