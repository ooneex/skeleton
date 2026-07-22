import type { SVGProps } from "react";

export const Heading3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M19 6H29V6.51362L20 14.6714V15H24.5C27.5376 15 30 17.4624 30 20.5V20.5C30 23.5376 27.5376 26 24.5 26H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M14 16H2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M2 6V26" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M14 6V26" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
