import type { SVGProps } from "react";

export const Bicycle3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle
        cx="19"
        cy="16"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <circle
        cx="5"
        cy="16"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M5 15.5L6.5 9H17.5H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M19 15.5L16.3462 4H14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M9 6H5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M16 4H20C21.1046 4 22 4.89543 22 6C22 6.90474 21.3993 7.66917 20.5749 7.91614"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
