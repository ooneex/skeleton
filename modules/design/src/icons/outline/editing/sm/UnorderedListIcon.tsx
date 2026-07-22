import type { SVGProps } from "react";

export const UnorderedListIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="4" cy="4" r="1" fill="currentColor" data-color="color-2" data-cap="butt" data-stroke="none" />
      <circle cx="4" cy="12" r="1" fill="currentColor" data-color="color-2" data-cap="butt" data-stroke="none" />
      <circle cx="4" cy="20" r="1" fill="currentColor" data-color="color-2" data-cap="butt" data-stroke="none" />
      <circle
        cx="4"
        cy="4"
        r="1"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <circle
        cx="4"
        cy="12"
        r="1"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <circle
        cx="4"
        cy="20"
        r="1"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M10 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M10 4H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M10 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
