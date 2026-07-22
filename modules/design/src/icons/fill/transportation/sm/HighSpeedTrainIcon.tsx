import type { SVGProps } from "react";

export const HighSpeedTrainIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13 4L10 11H3L2 15.8852H22V11H16V9H24V7H22V4H13Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 15.0769C1 8.40702 6.40702 3 13.0769 3L22 3V5L13.0769 5C7.53726 5 3.04163 9.47008 3.00029 15L22 15V17L2.92308 17C1.86099 17 1 16.139 1 15.0769Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 19H22V21H2V19Z" fill="currentColor" />
    </svg>
  );
};
