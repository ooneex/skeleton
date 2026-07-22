import type { SVGProps } from "react";

export const StringStartsWithIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M31 28H1V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M15.9792 17.008C14.5971 20.3595 11.7841 21.9496 9.15935 21.9993C7.31484 22.0342 5.40574 20.8176 5.04616 18.6738C4.76673 17.008 5.74943 15.3657 8.16989 14.6259C10.8062 13.8201 16 14.0227 16 14.0227"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16 22V13.3626C16 10.4009 13.5991 8 10.6374 8V8C9.26496 8 7.94477 8.52619 6.94861 9.47024L6 10.3692"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M20 22L20 3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M31 16.5V14.5C31 11.4624 28.5376 9 25.5 9C22.4624 9 20 11.4624 20 14.5V16.5C20 19.5376 22.4624 22 25.5 22C28.5376 22 31 19.5376 31 16.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
