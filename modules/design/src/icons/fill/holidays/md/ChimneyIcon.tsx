import type { SVGProps } from "react";

export const ChimneyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M31 2V9H2V2H31Z" fill="currentColor" />
      <path d="M5 25H19V30H5V25Z" fill="currentColor" />
      <path d="M13 18H27V23H13V18Z" fill="currentColor" />
      <path d="M5 11H19V16H5V11Z" fill="currentColor" />
      <path d="M21 11H27V16H21V11Z" fill="currentColor" data-color="color-2" />
      <path d="M5 18H11V23H5V18Z" fill="currentColor" data-color="color-2" />
      <path d="M21 25H27V30H21V25Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
