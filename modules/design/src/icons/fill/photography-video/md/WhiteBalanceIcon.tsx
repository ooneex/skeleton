import type { SVGProps } from "react";

export const WhiteBalanceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M32 15.5858L17.5858 30H32V15.5858Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 15.5858L14.4142 30H0V15.5858Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 2H27V17H5V2Z" fill="currentColor" />
    </svg>
  );
};
