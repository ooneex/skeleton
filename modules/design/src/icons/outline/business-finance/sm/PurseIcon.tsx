import type { SVGProps } from "react";

export const PurseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 11L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M9 6V4C9 2.34315 10.3431 1 12 1V1C13.6569 1 15 2.34315 15 4V6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M2.5 11H21.5" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M6.78684 21H17.2132C20.2634 21 22.6029 18.2924 22.1602 15.2744L20.8 6H12H3.20004L1.83977 15.2744C1.39712 18.2924 3.73657 21 6.78684 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
