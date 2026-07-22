import type { SVGProps } from "react";

export const CircleCheck2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polyline
        points="7 11 11 15 21 3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m15.949,2.813c-1.212-.522-2.546-.813-3.949-.813C6.477,2,2,6.477,2,12s4.477,10,10,10,10-4.477,10-10c0-1.15-.204-2.25-.561-3.279"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
