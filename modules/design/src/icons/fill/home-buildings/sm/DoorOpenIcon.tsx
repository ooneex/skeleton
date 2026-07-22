import type { SVGProps } from "react";

export const DoorOpenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 23.2559V0.790222L3 2.8975V20.7272L14 23.2559ZM12 12H10V15H12V12Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M16 3H21V21H16V3Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
