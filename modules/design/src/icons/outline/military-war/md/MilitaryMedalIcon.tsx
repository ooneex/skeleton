import type { SVGProps } from "react";

export const MilitaryMedalIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 7H23" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M16 17.5L18.0078 21.4501L22.5 22.084L19.25 25.1588L20.017 29.5L16 27.4501L11.9816 29.5L12.75 25.1588L9.5 22.084L13.9908 21.4501L16 17.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M23 10.8571L16 15L9 10.8571V2H23V10.8571Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
