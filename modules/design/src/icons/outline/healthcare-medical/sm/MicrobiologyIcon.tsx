import type { SVGProps } from "react";

export const MicrobiologyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M7.5 15L8.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <circle cx="16.5" cy="11.5" r="1.5" fill="currentColor" data-cap="butt" data-stroke="none" />
      <circle cx="14" cy="17" r="1" fill="currentColor" data-cap="butt" data-stroke="none" />
      <path
        d="M12.5 7.5V7.5C11.9477 7.22386 11.2761 7.44772 11 8V8C10.7239 8.55229 10.0523 8.77614 9.5 8.5V8.5C8.94772 8.22386 8.27614 8.44772 8 9V9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
