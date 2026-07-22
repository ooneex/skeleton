import type { SVGProps } from "react";

export const UnorderedListIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle
        cx="10"
        cy="10"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <circle
        cx="10"
        cy="24"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <circle
        cx="10"
        cy="38"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M20 24L43 24" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M20 10H43" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M20 38H43" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
