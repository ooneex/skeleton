import type { SVGProps } from "react";

export const VolumeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 0.19574V23.8042L11.7132 18H5C3.34315 18 2 16.6568 2 15V8.99999C2 7.34313 3.34315 5.99999 5 5.99999H11.7132L21 0.19574Z"
        fill="currentColor"
      />
    </svg>
  );
};
