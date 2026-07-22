import type { SVGProps } from "react";

export const ChampagneGlassIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M24 45V33" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M15.5 19H32.5" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M17 3L14.9896 23.1045C14.4597 28.4026 18.6754 33 24 33C29.3246 33 33.5403 28.4026 33.0104 23.1045L31 3H17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M17 45H31" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
