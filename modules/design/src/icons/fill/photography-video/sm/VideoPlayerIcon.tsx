import type { SVGProps } from "react";

export const VideoPlayerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 3C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V6C1 4.34315 2.34315 3 4 3H20ZM18.0156 12L8 6.27679V17.7232L18.0156 12Z"
        fill="currentColor"
      />
    </svg>
  );
};
