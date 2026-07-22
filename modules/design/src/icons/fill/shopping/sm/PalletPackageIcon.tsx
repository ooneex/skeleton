import type { SVGProps } from "react";

export const PalletPackageIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13 8V13H19V8H13Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M0 19H6V22H0V19Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M9 19H15V22H9V19Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M18 19H24V22H18V19Z" fill="currentColor" />
      <path d="M19 6V1H13V6H19Z" fill="currentColor" data-color="color-2" />
      <path d="M5 1H11V6H5V1Z" fill="currentColor" data-color="color-2" />
      <path d="M5 8V13H11V8H5Z" fill="currentColor" data-color="color-2" />
      <path
        d="M5 15H19C20.1046 15 21 14.1046 21 13V7.59998L24 14.8V17H0V14.8L3 7.59999V13C3 14.1046 3.89543 15 5 15Z"
        fill="currentColor"
      />
    </svg>
  );
};
