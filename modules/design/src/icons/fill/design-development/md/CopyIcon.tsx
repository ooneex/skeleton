import type { SVGProps } from "react";

export const CopyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M5 2H27V7H5V2Z" fill="currentColor" data-color="color-2" />
      <path d="M3 9V30H29V9H3Z" fill="currentColor" />
    </svg>
  );
};
