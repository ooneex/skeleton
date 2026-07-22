import type { SVGProps } from "react";

export const MediaStopIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 4H28V28H4V4Z" fill="currentColor" />
    </svg>
  );
};
