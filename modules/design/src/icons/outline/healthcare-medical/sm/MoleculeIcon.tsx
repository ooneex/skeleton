import type { SVGProps } from "react";

export const MoleculeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M13.5 7.5L10.75 12L5.25 12L2.5 7.5L5.25 3L8 3L10.75 3L13.5 7.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M13.5 16.5L10.75 21L5.25 21L2.5 16.5L5.25 12L8 12L10.75 12L13.5 16.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M21.7564 12L19.0064 16.5L13.5064 16.5L10.7564 12L13.5064 7.5L16.2564 7.5L19.0064 7.5L21.7564 12Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
