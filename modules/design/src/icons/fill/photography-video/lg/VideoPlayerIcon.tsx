import type { SVGProps } from "react";

export const VideoPlayerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 36C46 39.3137 43.3137 42 40 42L8 42C4.68629 42 2 39.3137 2 36L2 12C2 8.68629 4.68629 6 8 6L40 6C43.3137 6 46 8.68629 46 12L46 36ZM35.4915 24L17 13.263V34.737L35.4915 24Z"
        fill="currentColor"
      />
    </svg>
  );
};
