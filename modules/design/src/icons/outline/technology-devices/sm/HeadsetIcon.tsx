import type { SVGProps } from "react";

export const HeadsetIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M19 18.5V17.5V20C19 21.1046 18.1046 22 17 22H12C11.4477 22 11 21.5523 11 21V21C11 20.4477 11.4477 20 12 20V20V20C12.5523 20 13 20.4477 13 21V21.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M6 11.5V11.5C7.10457 11.5 8 12.3954 8 13.5V18H7C4.79086 18 3 16.2091 3 14V11C3 6.02944 7.02944 2 12 2V2C16.9706 2 21 6.02944 21 11V14C21 16.2091 19.2091 18 17 18H16V13.5C16 12.3954 16.8954 11.5 18 11.5V11.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
