import type { SVGProps } from "react";

export const ChartPieIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 11.4733V28.5815C16 29.3967 16.3975 30.1607 17.065 30.6286L31.3588 40.6485C28.3481 43.3539 24.3663 45 20 45C10.6112 45 3 37.3888 3 28C3 19.9889 8.54127 13.2721 16 11.4733Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M40 43C43 39 45 33.5 45 27.8936C45 14.0984 33.5 2.50003 19 3.00002V28.5L40 43Z" fill="currentColor" />
    </svg>
  );
};
