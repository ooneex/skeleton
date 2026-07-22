import type { SVGProps } from "react";

export const ConversionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M18 2.08582L30.9142 14H2V12H18V2.08582Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 29.9142L1.08579 18H30V20H14V29.9142Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
