import type { SVGProps } from "react";

export const HappyBabyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="22.5" cy="12" r="1.5" fill="currentColor" data-cap="butt" data-stroke="none" />
      <circle cx="1.5" cy="12" r="1.5" fill="currentColor" data-cap="butt" data-stroke="none" />
      <path
        d="M14.2361 7C13.6868 7.61375 12.8885 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2L11.5095 2.0399"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12 19C14.2091 19 16 17.2091 16 15H8C8 17.2091 9.79086 19 12 19Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <circle cx="8.5" cy="11.5" r="1.5" fill="currentColor" data-color="color-2" data-cap="butt" data-stroke="none" />
      <circle cx="15.5" cy="11.5" r="1.5" fill="currentColor" data-color="color-2" data-cap="butt" data-stroke="none" />
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
