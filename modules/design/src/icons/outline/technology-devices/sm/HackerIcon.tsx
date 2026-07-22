import type { SVGProps } from "react";

export const HackerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m8,12c-1.238-1.377-1.947-3.149-2-5,0-2,4-6,6-6s6,4,6,6c-.053,1.851-.762,3.623-2,5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m10.891,5.74l-1.891,1.26c0,3,2,4,3,4s3-1,3-4l-1.891-1.26c-.672-.448-1.546-.448-2.218,0Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
        data-cap="butt"
      />
      <rect
        x="6"
        y="15"
        width="12"
        height="8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m6.753,10.185l-3.253,2.439c-.326.244-.571.582-.7.968l-1.409,4.235c-.24.719-.053,1.511.483,2.047l1.126,1.126"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-cap="butt"
      />
      <path
        d="m17.247,10.186l3.253,2.438c.326.244.571.582.7.968l1.411,4.235c.24.719.053,1.511-.483,2.047l-1.128,1.126"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-cap="butt"
      />
      <circle cx="12" cy="19" r="1.5" fill="currentColor" strokeWidth="0" data-color="color-2" data-cap="butt" />
    </svg>
  );
};
