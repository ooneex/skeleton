import type { SVGProps } from "react";

export const VolumeMinusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 11L17 11L17 13L24 13L24 11Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M15 0.864929L7.63795 6.99997H4C2.34315 6.99997 1 8.34312 1 9.99997V14C1 15.6568 2.34315 17 4 17H7.63795L15 23.135V0.864929Z"
        fill="currentColor"
      />
    </svg>
  );
};
