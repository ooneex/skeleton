import type { SVGProps } from "react";

export const SinkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13 24V29H19V24" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M16 9H19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M16 13V4.49998C16 3.11928 14.8807 2 13.5 2V2C12.1193 2 11 3.11928 11 4.49998V7"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M14.9293 24L17.0707 24C22.933 24 28.0701 20.0763 29.6126 14.4205L29.6555 14.2631C29.829 13.627 29.3501 13 28.6907 13L3.30925 13C2.64988 13 2.17099 13.627 2.34449 14.2631L2.38742 14.4205C3.92991 20.0763 9.06698 24 14.9293 24Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
