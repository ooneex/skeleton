import type { SVGProps } from "react";

export const Box2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 3V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M3 9H21" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M21 19L21 9L19 3L5 3L3 9L3 19C3 20.1046 3.89543 21 5 21L19 21C20.1046 21 21 20.1046 21 19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
