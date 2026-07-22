import type { SVGProps } from "react";

export const CopyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 0H20V2H4V0Z" fill="currentColor" data-color="color-2" />
      <path d="M2 4V23H22V4H2Z" fill="currentColor" />
    </svg>
  );
};
