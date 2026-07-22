import type { SVGProps } from "react";

export const BucketIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M3.5 6L5.625 19.3333C5.87874 20.9462 8.79972 22 12 22C15.2003 22 18.1678 20.91 18.375 19.3333L20.5 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M12 9C16.6944 9 20.5 7.65685 20.5 6C20.5 4.34315 16.6944 3 12 3C7.30558 3 3.5 4.34315 3.5 6C3.5 7.65685 7.30558 9 12 9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
