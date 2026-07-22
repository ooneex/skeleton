import type { SVGProps } from "react";

export const MicrobiologyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M8 19L9.5 20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 23.5L21.5 22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M18 8V8C16.8954 7.44771 15.5523 7.89543 15 9V9C14.4477 10.1046 13.1046 10.5523 12 10V10C10.8954 9.44772 9.55228 9.89543 9 11V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <circle cx="15" cy="16" r="1" fill="currentColor" data-cap="butt" data-stroke="none" />
      <circle cx="24" cy="15" r="2" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <circle cx="14.5" cy="23.5" r="1.5" fill="currentColor" data-cap="butt" data-stroke="none" />
    </svg>
  );
};
