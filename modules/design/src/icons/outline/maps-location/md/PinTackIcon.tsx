import type { SVGProps } from "react";

export const PinTackIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4 28L11 21L10.5 21.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M19 29L11 21L3 13L4.33312 11.6669C5.91167 10.0883 8.34541 9.74747 10.2969 10.8316L10.6192 11.0107L21 3L29 11L20.9893 21.3808L21.1684 21.7031C22.2525 23.6546 21.9117 26.0883 20.3331 27.6669L19 29Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
    </svg>
  );
};
