import type { SVGProps } from "react";

export const YogurtCupIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5 15H9C11.2091 15 13 13.2091 13 11V11C13 8.79086 11.2091 7 9 7V7C6.79086 7 5 8.79086 5 11V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M24.0649 11L24.0404 11L26.4373 5.80384C27.0305 4.51782 26.5004 2.99294 25.2373 2.35226V2.35226C23.8227 1.63473 22.0995 2.32135 21.566 3.8151L19 11L19.0273 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M21 25H11V19H21V25Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M5 15V27C5 28.1046 5.89543 29 7 29H25C26.1046 29 27 28.1046 27 27V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M2 15H30" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
