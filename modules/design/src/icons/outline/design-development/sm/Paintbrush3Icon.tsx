import type { SVGProps } from "react";

export const Paintbrush3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4 11V2H7.5L9.5 5L11.5 2H20V11"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M4 12.3057V11H20V12.3057C20 13.2834 19.2932 14.1178 18.3288 14.2785L14 15L14.6279 20.0232C14.8255 21.6038 13.593 23 12 23C10.407 23 9.17452 21.6038 9.3721 20.0232L10 15L5.6712 14.2785C4.70683 14.1178 4 13.2834 4 12.3057Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
