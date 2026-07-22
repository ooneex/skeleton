import type { SVGProps } from "react";

export const AxisZIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9999 1V13H22.9999V15H10.4141L3.49991 21.9142L2.08569 20.5L8.99991 13.5858V1H10.9999Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.99998 13L1.99997 22.071L11.071 22.071L11.071 20.071L3.99997 20.071L3.99998 13L1.99998 13Z"
        fill="currentColor"
      />
    </svg>
  );
};
