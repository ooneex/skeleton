import type { SVGProps } from "react";

export const OctagonQuestionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="16.142 2 7.858 2 2 7.858 2 16.142 7.858 22 16.142 22 22 16.142 22 7.858 16.142 2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <circle cx="12" cy="17.25" r="1.25" fill="currentColor" strokeWidth="0" data-color="color-2" data-cap="butt" />
      <path
        d="m9.004,8.5c.449-1.362,1.621-2.062,2.925-1.995,1.353.07,2.612.814,2.554,2.54-.083,2.454-2.192,2.122-2.484,4.455h.01"
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
