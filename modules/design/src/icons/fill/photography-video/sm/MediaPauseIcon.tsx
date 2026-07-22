import type { SVGProps } from "react";

export const MediaPauseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 3H10V21H3V3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 3H21V21H14V3Z" fill="currentColor" />
    </svg>
  );
};
