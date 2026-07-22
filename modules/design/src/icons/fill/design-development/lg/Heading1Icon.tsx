import type { SVGProps } from "react";

export const Heading1Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.4793 9H43.5V39H40.5V12.0164L30.2522 20.1068L28.3932 17.7521L39.4793 9Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 22.5H23V25.5H4V22.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7 9V39H4V9H7Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M23 9V39H20V9H23Z" fill="currentColor" />
    </svg>
  );
};
