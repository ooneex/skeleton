import type { SVGProps } from "react";

export const ExportIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M34.6215 12.5L24.0002 1.87866L13.3789 12.5L15.5002 14.6213L22.5 7.62153V20H25.5V7.62108L32.5002 14.6213L34.6215 12.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M22.5 20V32H25.5V20H38C41.3137 20 44 22.6863 44 26V38C44 41.3137 41.3137 44 38 44H10C6.68629 44 4 41.3137 4 38V26C4 22.6863 6.68629 20 10 20H22.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
