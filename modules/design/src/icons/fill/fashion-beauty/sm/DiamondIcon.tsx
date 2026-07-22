import type { SVGProps } from "react";

export const DiamondIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M19.5664 2L23.1406 8H15.5L18.2324 4H13.167L15.5 8H8.5L10.833 4H5.77246L8.5 8H0.860352L4.4375 2H19.5664Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.0234 10L12 22.5L0.977539 10H23.0234ZM8.88867 12L12 22.5L15.1113 12H12H8.88867Z"
        fill="currentColor"
      />
    </svg>
  );
};
