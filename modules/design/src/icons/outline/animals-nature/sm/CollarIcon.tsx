import type { SVGProps } from "react";

export const CollarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 1C10.3431 1 9 2.34315 9 4V5M12 14C10.3432 14 9 12.6569 9 11V10.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M23 9V3.5L20.8648 3.98526C15.0294 5.31151 8.97065 5.31151 3.13516 3.98526L1 3.5V9L3.13516 9.48526C8.97065 10.8115 15.0294 10.8115 20.8648 9.48526L23 9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12 23C13.933 23 15.5 21.433 15.5 19.5C15.5 17.567 13.933 16 12 16C10.067 16 8.5 17.567 8.5 19.5C8.5 21.433 10.067 23 12 23Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12 1C13.6568 1 15 2.34314 15 4V11C15 12.6568 13.6569 14 12 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
    </svg>
  );
};
