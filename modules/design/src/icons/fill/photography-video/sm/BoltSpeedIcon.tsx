import type { SVGProps } from "react";

export const BoltSpeedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3234 0.0866699L15.6452 9.04525H23.706L10.6766 23.9133L11.3548 14.9548H3.29402L16.3234 0.0866699Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 4H9V6H2V4Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 18H9V20H3V18Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M0 8H4V10H0V8Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
