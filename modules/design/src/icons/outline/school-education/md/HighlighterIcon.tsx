import type { SVGProps } from "react";

export const HighlighterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M6 22L26 22" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M19 10L19 3L13.0001 4.5L13.0001 10"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M6 28.9998L6.00006 21.8903C6.00007 20.8658 6.39321 19.8803 7.09841 19.1371L10.1098 15.9633C10.4624 15.5917 10.659 15.099 10.659 14.5867L10.659 10L21.3409 10L21.3409 14.5867C21.3409 15.099 21.5375 15.5917 21.8901 15.9633L24.9017 19.1373C25.6069 19.8805 26 20.866 26 21.8906L25.9999 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
