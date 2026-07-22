import type { SVGProps } from "react";

export const IronIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.20931 2H15.0001V4H6.82748L5.97371 8H14.305C17.5227 8 20.326 10.1936 21.0996 13.317L22.0119 17H2.00769L5.20931 2Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 19H22V21H2V19Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
