import type { SVGProps } from "react";

export const CopiesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M1 9H31V30H1V9Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 5H27V7H5V5Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M9 1H23V3H9V1Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
