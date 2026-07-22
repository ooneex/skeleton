import type { SVGProps } from "react";

export const EditSquareIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 3.5H18V5.5H6V3.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 18.5H18V20.5H6V18.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M18.5 18L18.5 6L20.5 6L20.5 18L18.5 18Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3.5 18L3.5 6L5.5 6L5.5 18L3.5 18Z" fill="currentColor" />
      <path d="M16.5 1.5H22.5V7.5H16.5V1.5Z" fill="currentColor" data-color="color-2" />
      <path d="M16.5 16.5H22.5V22.5H16.5V16.5Z" fill="currentColor" data-color="color-2" />
      <path d="M1.5 1.5H7.5V7.5H1.5V1.5Z" fill="currentColor" data-color="color-2" />
      <path d="M1.5 16.5H7.5V22.5H1.5V16.5Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
