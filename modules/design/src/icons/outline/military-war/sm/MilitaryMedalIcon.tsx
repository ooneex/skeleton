import type { SVGProps } from "react";

export const MilitaryMedalIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M7 5H17" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M12 13L13.39 15.798L16.5 16.247L14.25 18.425L14.781 21.5L12 20.048L9.218 21.5L9.75 18.425L7.5 16.247L10.609 15.798L12 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M17 8.14286L12 11L7 8.14286V1H17V8.14286Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
