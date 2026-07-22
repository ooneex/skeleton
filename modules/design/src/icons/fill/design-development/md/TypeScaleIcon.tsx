import type { SVGProps } from "react";

export const TypeScaleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13 4V28H11V4H13Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M24 14V28H22V14H24Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 4H22V6H2V4Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 14H29V16H17V14Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
