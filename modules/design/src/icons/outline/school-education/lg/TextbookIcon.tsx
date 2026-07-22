import type { SVGProps } from "react";

export const TextbookIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13 3V45" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M21 3V19L27 15L33 19V3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M7 3H36C38.7614 3 41 5.23858 41 8V40C41 42.7614 38.7614 45 36 45H7V3Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
