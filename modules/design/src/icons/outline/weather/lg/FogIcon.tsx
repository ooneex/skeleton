import type { SVGProps } from "react";

export const FogIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 32L30 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M18 24L45 24" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M20 40H33" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M10 8L23 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M13 16L31 16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M37 32H41"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M3 16L6 16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
