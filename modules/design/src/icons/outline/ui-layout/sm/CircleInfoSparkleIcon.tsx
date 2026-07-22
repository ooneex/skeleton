import type { SVGProps } from "react";

export const CircleInfoSparkleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <circle cx="12" cy="7.25" r="1.25" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <path
        d="m13.191,2.083c-.391-.048-.787-.083-1.191-.083C6.477,2,2,6.477,2,12s4.477,10,10,10,10-4.477,10-10c0-.404-.035-.799-.083-1.19"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <polygon
        points="20.5 3.5 19 0 17.5 3.5 14 5 17.5 6.5 19 10 20.5 6.5 24 5 20.5 3.5"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
        data-cap="butt"
      />
    </svg>
  );
};
