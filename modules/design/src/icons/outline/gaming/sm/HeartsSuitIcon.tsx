import type { SVGProps } from "react";

export const HeartsSuitIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 21C14.218 20 22 14.458 22 9.378C22 6.408 19.588 4 16.616 4C14.656 4 13.192 5.228 12 6.606C10.81 5.226 9.344 4 7.384 4C4.41 4 2 6.408 2 9.378C2 14.458 9.782 20 12 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
