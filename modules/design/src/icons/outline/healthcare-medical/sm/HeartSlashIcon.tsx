import type { SVGProps } from "react";

export const HeartSlashIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m10.082,19.575l1.91,1.425,3.197-2.379c1.129-.84,4.926-3.881,6.409-7.745.395-1.03.484-2.108.31-3.125"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m19.818,4.182c-.385-.304-.814-.56-1.284-.755-2.41-1.006-5.105-.105-6.538,2.019-1.433-2.123-4.128-3.025-6.538-2.019-2.82,1.176-4.192,4.511-3.063,7.45.981,2.557,2.975,4.753,4.54,6.19"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-cap="butt"
      />
      <line
        x1="22"
        y1="2"
        x2="2"
        y2="22"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
    </svg>
  );
};
