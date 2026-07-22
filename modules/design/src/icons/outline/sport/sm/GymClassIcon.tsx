import type { SVGProps } from "react";

export const GymClassIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13 9L9 16.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M18.9999 9.00005L9.54586 9.00005C9.20559 9.00005 8.88868 9.17307 8.70468 9.45929L5.79867 13.9798C5.19902 14.9125 5.78386 16.1511 6.88517 16.2806L11.5854 16.8336C12.2737 16.9146 12.6729 17.6542 12.363 18.274L10.9999 21L11.0645 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M20 5C20.5523 5 21 5.44772 21 6V7H17V6C17 5.44772 17.4477 5 18 5H20Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M21 11V12C21 12.5523 20.5523 13 20 13H18C17.4477 13 17 12.5523 17 12V11H21Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
