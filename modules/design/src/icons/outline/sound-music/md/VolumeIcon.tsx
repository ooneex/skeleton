import type { SVGProps } from "react";

export const VolumeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 9H7C5.34315 9 4 10.3431 4 12V20C4 21.6569 5.34315 23 7 23H16L26 30V2L16 9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
