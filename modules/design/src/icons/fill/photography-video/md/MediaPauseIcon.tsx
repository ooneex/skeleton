import type { SVGProps } from "react";

export const MediaPauseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M19 4H28V28H19V4Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 4H13V28H4V4Z" fill="currentColor" />
    </svg>
  );
};
