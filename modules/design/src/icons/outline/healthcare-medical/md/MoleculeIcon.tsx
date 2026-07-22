import type { SVGProps } from "react";

export const MoleculeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18.5 9.5L14.75 16L7.25 16L3.5 9.5L7.25 3L11 3L14.75 3L18.5 9.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M18.5 22.5L14.75 29L7.25 29L3.5 22.5L7.25 16L11 16L14.75 16L18.5 22.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M29.7461 16L25.9961 22.5L18.4961 22.5L14.7461 16L18.4961 9.5L22.2461 9.5L25.9961 9.5L29.7461 16Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
