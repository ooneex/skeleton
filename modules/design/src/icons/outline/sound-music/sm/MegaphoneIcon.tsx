import type { SVGProps } from "react";

export const MegaphoneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m6,15.25v3.335c0,.443.291.833.716.959l3.626,1.074c.399.118.83-.023,1.082-.356l2.029-2.683"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <path
        d="m18,20V2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path d="m2,14l16,5" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" data-cap="butt" />
      <path d="m18,3L2,8" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" data-cap="butt" />
      <path
        d="m22,12.723c.595-.346,1-.984,1-1.723s-.405-1.376-1-1.723v3.445Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path d="m2,7v8" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" />
    </svg>
  );
};
