import type { SVGProps } from "react";

export const MakeupFoundationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M28 11V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M20 11V3H36" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M17 17.0165V11L31 11V17.0165"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M32 45H16C13.7909 45 12 43.2091 12 41V21C12 18.7909 13.7909 17 16 17H32C34.2091 17 36 18.7909 36 21V41C36 43.2091 34.2091 45 32 45Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M29 39H19V26H29V39Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
