import type { SVGProps } from "react";

export const Heading5Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M30 6H20V14H25C28.3137 14 31 16.6863 31 20V20C31 23.3137 28.3137 26 25 26H20"
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
