import type { SVGProps } from "react";

export const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 13L3 13L3 11L22 11L22 13Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4143 5.00003L4.41431 12L11.4143 19L10.0001 20.4142L1.58588 12L10.0001 3.58582L11.4143 5.00003Z"
        fill="currentColor"
      />
    </svg>
  );
};
