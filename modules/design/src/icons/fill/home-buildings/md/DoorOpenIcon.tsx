import type { SVGProps } from "react";

export const DoorOpenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 31.2571V0.74295L4 4.20449V27.7955L19 31.2571ZM16 16H14V20H16V16Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M21 3H28V29H21V3Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
