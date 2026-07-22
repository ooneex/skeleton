import type { SVGProps } from "react";

export const Layers2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M1 8V23H16V8H1Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 4H20V19H18V6H5V4Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M9 0H24V15H22V2H9V0Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
