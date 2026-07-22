import type { SVGProps } from "react";

export const SliceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M11 9.66031L4.00002 21.7847L13.5622 19.2225L12.4641 15.1244L14.4641 11.6603"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M11 9.66028L14.5 3.5981C15.3284 2.16322 17.1632 1.6716 18.598 2.50002C20.0329 3.32845 20.5245 5.16322 19.6961 6.5981L16.1961 12.6603L11 9.66028Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
