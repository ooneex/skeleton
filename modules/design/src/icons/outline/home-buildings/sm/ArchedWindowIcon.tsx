import type { SVGProps } from "react";

export const ArchedWindowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5.14648 5.14652L11.9999 12L18.8535 5.14651"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M12 2V21" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M21 12L3 12" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M21 21L21 11C21 6.02944 16.9706 2 12 2C7.02944 2 3 6.02944 3 11L3 21L21 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
