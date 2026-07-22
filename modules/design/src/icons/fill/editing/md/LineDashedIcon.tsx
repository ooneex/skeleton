import type { SVGProps } from "react";

export const LineDashedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 17L1 17L1 15L9 15L9 17Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 17L23 17L23 15L31 15L31 17Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M20 17L12 17L12 15L20 15L20 17Z" fill="currentColor" />
    </svg>
  );
};
