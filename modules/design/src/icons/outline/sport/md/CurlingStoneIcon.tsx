import type { SVGProps } from "react";

export const CurlingStoneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M2 20H30" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M23 13L21.5681 7.27239C21.2342 5.93689 20.0343 5 18.6577 5H9C7.89543 5 7 5.89543 7 7V7C7 8.10457 7.89543 9 9 9H17V13"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <rect
        x="2"
        y="13"
        width="28"
        height="15"
        rx="7"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
