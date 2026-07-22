import type { SVGProps } from "react";

export const Layers2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 10H22V30H2V10Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7 6H26V25H24V8H7V6Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 2H30L30 21L28 21L28 4H11V2Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
