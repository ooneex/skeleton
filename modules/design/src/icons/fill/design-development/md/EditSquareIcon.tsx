import type { SVGProps } from "react";

export const EditSquareIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 5H24V7H8V5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8 25H24V27H8V25Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M25 24L25 8L27 8L27 24L25 24Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 8L7 8L7 24L5 24L5 8Z" fill="currentColor" />
      <path d="M9.5 2.5H2.5V9.5H9.5V2.5Z" fill="currentColor" data-color="color-2" />
      <path d="M9.5 22.5H2.5V29.5H9.5V22.5Z" fill="currentColor" data-color="color-2" />
      <path d="M29.5 22.5H22.5V29.5H29.5V22.5Z" fill="currentColor" data-color="color-2" />
      <path d="M29.5 2.5H22.5V9.5H29.5V2.5Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
