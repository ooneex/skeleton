import type { SVGProps } from "react";

export const VolumeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39 2.16833V45.8317L23.7063 36H12C8.68629 36 6 33.3137 6 30V18C6 14.6863 8.68629 12 12 12H23.7063L39 2.16833Z"
        fill="currentColor"
      />
    </svg>
  );
};
