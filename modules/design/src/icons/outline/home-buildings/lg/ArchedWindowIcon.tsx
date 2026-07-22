import type { SVGProps } from "react";

export const ArchedWindowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12.5 7.5L24 19L35.5 7.5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M24 3V43" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M41 19H7" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M41 31H7" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M41 43L41 20C41 10.6112 33.3888 3 24 3C14.6112 3 7 10.6112 7 20L7 43L41 43Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
