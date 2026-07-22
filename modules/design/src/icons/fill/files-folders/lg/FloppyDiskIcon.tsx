import type { SVGProps } from "react";

export const FloppyDiskIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M23 10V6H26V10H23Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 38V13.5858L34.4142 4H10C6.68629 4 4 6.68629 4 10V38C4 41.3137 6.68629 44 10 44H38C41.3137 44 44 41.3137 44 38ZM31 7H11V16H31V7ZM37 29H11V41H37V29Z"
        fill="currentColor"
      />
    </svg>
  );
};
