import type { SVGProps } from "react";

export const FogIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 20L21 20V22L7 22L7 20Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M11 15L32 15V17L11 17V15Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 25L23 25V27L12 27V25Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 5L17 5V7L6 7L6 5Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8 10L22 10V12L8 12V10Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M24 20H29V22H24V20Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 10H5V12H1V10Z" fill="currentColor" />
    </svg>
  );
};
