import type { SVGProps } from "react";

export const MediaStopIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 3H21V21H3V3Z" fill="currentColor" />
    </svg>
  );
};
