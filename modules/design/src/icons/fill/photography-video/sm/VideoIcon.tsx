import type { SVGProps } from "react";

export const VideoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 2H16V8H14V4H4V2Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6H16C17.6569 6 19 7.34315 19 9V10L23 8V20L19 18V19C19 20.6569 17.6569 22 16 22H4C2.34315 22 1 20.6569 1 19V9C1 7.34315 2.34315 6 4 6ZM8 11.5C8 12.3284 7.32843 13 6.5 13C5.67157 13 5 12.3284 5 11.5C5 10.6716 5.67157 10 6.5 10C7.32843 10 8 10.6716 8 11.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
