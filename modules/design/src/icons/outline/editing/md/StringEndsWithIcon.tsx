import type { SVGProps } from "react";

export const StringEndsWithIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M11.9792 17.008C10.5971 20.3595 7.78407 21.9496 5.15935 21.9993C3.31484 22.0342 1.40574 20.8176 1.04616 18.6738C0.766728 17.008 1.74943 15.3657 4.16989 14.6259C6.80621 13.8201 12 14.0227 12 14.0227"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M12 22V13.3626C12 10.4009 9.59908 8 6.63738 8V8C5.26496 8 3.94477 8.52619 2.94861 9.47024L2 10.3692"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M16 22L16 3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M27 16.5V14.5C27 11.4624 24.5376 9 21.5 9C18.4624 9 16 11.4624 16 14.5V16.5C16 19.5376 18.4624 22 21.5 22C24.5376 22 27 19.5376 27 16.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M1 28H31V22"
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
