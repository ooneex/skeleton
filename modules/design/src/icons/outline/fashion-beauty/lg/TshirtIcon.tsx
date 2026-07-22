import type { SVGProps } from "react";

export const TshirtIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16.5 5H31.5" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M11 20H3V11L7.24264 6.75736C8.36786 5.63214 9.89398 5 11.4853 5H16.5L16.8943 7.10277C17.5354 10.5222 20.521 13 24 13V13C27.479 13 30.4646 10.5221 31.1057 7.10276L31.5 5H32H36.5147C38.106 5 39.6321 5.63214 40.7574 6.75736L45 11V20H37"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M11 20V43H37V20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
