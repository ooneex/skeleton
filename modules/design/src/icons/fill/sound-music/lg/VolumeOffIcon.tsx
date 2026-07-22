import type { SVGProps } from "react";

export const VolumeOffIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 36C8.68629 36 6 33.3137 6 30V18C6 14.6863 8.68629 12 12 12H23.7063L39 2.16833V12.6527L15.9778 36H12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.1213 6.99998L9.00001 45.1213L6.87869 43L45 4.87866L47.1213 6.99998Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M22.364 36H23.7063L39 45.8317V19.364L22.364 36Z" fill="currentColor" />
    </svg>
  );
};
