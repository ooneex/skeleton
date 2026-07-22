import type { SVGProps } from "react";

export const LayersIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 4.81384L45.7837 16.0001L24 27.1863L2.21631 16.0001L24 4.81384Z"
        fill="currentColor"
      />
      <path
        d="M45.0002 21.314V24.6883L24.0005 35.5L3.00024 24.6911V21.317L24.0003 32.1258L45.0002 21.314Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M45.0002 29.314V32.6883L24.0005 43.5L3.00024 32.6911V29.317L24.0003 40.1258L45.0002 29.314Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
