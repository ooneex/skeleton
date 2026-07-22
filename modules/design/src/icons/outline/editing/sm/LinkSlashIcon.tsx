import type { SVGProps } from "react";

export const LinkSlashIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m4.929,13.414l-.672-.672c-2.343-2.343-2.343-6.142,0-8.485h0c2.343-2.343,6.142-2.343,8.485,0l.672.672"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m10.586,19.071l.672.672c2.343,2.343,6.142,2.343,8.485,0h0c2.343-2.343,2.343-6.142,0-8.485l-.672-.672"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="12"
        y1="12"
        x2="9"
        y2="9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <line
        x1="22"
        y1="2"
        x2="2"
        y2="22"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
    </svg>
  );
};
