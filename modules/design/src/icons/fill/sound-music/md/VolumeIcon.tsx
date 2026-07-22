import type { SVGProps } from "react";

export const VolumeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M27 0.0793457L15.6848 8H7C4.79086 8 3 9.79086 3 12V20C3 22.2091 4.79086 24 7 24H15.6848L27 31.9207V0.0793457Z"
        fill="currentColor"
      />
    </svg>
  );
};
