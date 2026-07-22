import type { SVGProps } from "react";

export const MonitorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 17V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M7 21H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M2 6L2 15C2 16.1046 2.89543 17 4 17L20 17C21.1046 17 22 16.1046 22 15L22 6C22 4.89543 21.1046 4 20 4L19 4L4 4C2.89543 4 2 4.89543 2 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
