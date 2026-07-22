import type { SVGProps } from "react";

export const SlotMachineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M4 17V22H15V17" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M22 12V18C22 19.6569 20.6569 21 19 21V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M2 7C2 5.89543 2.89543 5 4 5H6L6.20943 4.37171C6.68155 2.95535 8.00702 2 9.5 2V2C10.993 2 12.3184 2.95535 12.7906 4.37171L13 5H15C16.1046 5 17 5.89543 17 7V17H2V7Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M22 14C20.8954 14 20 13.1046 20 12C20 10.8954 20.8954 10 22 10C23.1046 10 24 10.8954 24 12C24 13.1046 23.1046 14 22 14Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M13 9H6V13H13V9Z"
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
