import type { SVGProps } from "react";

export const ScoreboardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect
        x="3"
        y="7"
        width="42"
        height="34"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <rect
        x="10"
        y="15"
        width="9"
        height="18"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M29 15H38V15.8182L29.8182 21.9545V23.1818H38V33H29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M24 16V17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M24 30V31.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
