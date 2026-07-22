import type { SVGProps } from "react";

export const Dna3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M27 16H23L9 30H5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M5 16H9L13.1819 20.1819" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M27 30H23L18.8342 25.8342"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M27 2H23L9 16H6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M5 2H9L13.1819 6.18187"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M27 16H23L18.8342 11.8342" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
