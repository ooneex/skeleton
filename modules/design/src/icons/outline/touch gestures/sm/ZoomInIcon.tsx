import type { SVGProps } from "react";

export const ZoomInIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M1 9L9 1" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M8.99997 5L8.99997 0.999994L5.00003 0.999996"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M1.00004 5L1.00003 9.00001L4.99997 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M6.92395 14.7466L11.2683 18.4874C11.4325 18.6287 11.5859 18.7845 11.6963 18.9709C11.9695 19.4321 12.1153 19.96 12.1153 20.5V23.0001H21.6153L22.9605 14.7466C23.213 13.1974 22.2288 11.7156 20.703 11.3476L15.1153 10V5.5C15.1153 4.67157 14.4437 4 13.6153 4C12.7869 4 12.1153 4.67157 12.1153 5.5L12.1153 14L8.43514 12.2066C7.66312 11.8556 6.75441 12.2205 6.43946 13.0079C6.19045 13.6304 6.3889 14.3425 6.92395 14.7466Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
