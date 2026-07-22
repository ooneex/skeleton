import type { SVGProps } from "react";

export const TextSizeChangeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M22 43L22 11H34V5H4V11H16L16 43H22Z" fill="currentColor" stroke="currentColor" strokeWidth="2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M39 19L47 27H31L39 19Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M39 42L47 34H31L39 42Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
