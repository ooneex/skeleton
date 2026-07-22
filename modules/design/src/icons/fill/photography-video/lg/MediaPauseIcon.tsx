import type { SVGProps } from "react";

export const MediaPauseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M28 6H39V42H28V6Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M9 6H20V42H9V6Z" fill="currentColor" />
    </svg>
  );
};
