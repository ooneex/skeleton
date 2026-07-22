import type { SVGProps } from "react";

export const SquareLayoutGridIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="m17,17v13h9c2.206,0,4-1.794,4-4v-9h-13Z" strokeWidth="0" fill="currentColor" />
      <path d="m17,15h13V6c0-2.206-1.794-4-4-4h-9v13Z" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path d="m15,15V2H6c-2.206,0-4,1.794-4,4v9h13Z" strokeWidth="0" fill="currentColor" />
      <path d="m15,17H2v9c0,2.206,1.794,4,4,4h9v-13Z" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
