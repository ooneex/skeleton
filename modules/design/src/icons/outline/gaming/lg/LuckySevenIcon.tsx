import type { SVGProps } from "react";

export const LuckySevenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 37V34" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M16 14V11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M32 37V34" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M32 14L32 11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M7 19L14 19V19.5L12.2525 21.4611C10.1576 23.8121 9 26.8511 9 30V30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M34 19L41 19V19.5L39.2525 21.4611C37.1576 23.8121 36 26.8511 36 30V30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M20.5 19L27.5 19V19.5L25.7525 21.4611C23.6576 23.8121 22.5 26.8511 22.5 30V30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <rect
        x="2"
        y="11"
        width="44"
        height="26"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
