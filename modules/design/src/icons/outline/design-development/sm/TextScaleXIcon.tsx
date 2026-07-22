import type { SVGProps } from "react";

export const TextScaleXIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 15V2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M7 2H17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M2.5 19H21.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M19 21.5L21.5 19L19 16.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M5 21.5L2.5 19L5 16.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
