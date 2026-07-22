import type { SVGProps } from "react";

export const PriorityLowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M28.9636 18.1212L18.1213 28.9635C16.9497 30.1351 15.0503 30.1351 13.8787 28.9635L3.03638 18.1212C1.8648 16.9496 1.86481 15.0501 3.03638 13.8786L13.8787 3.03626C15.0503 1.86468 16.9497 1.86468 18.1213 3.03626L28.9636 13.8786C30.1352 15.0501 30.1352 16.9496 28.9636 18.1212Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M10 17L16 23L22 17"
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
