import type { SVGProps } from "react";

export const RoadmapIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2452 28L29 28C32.3137 28 35 25.3137 35 22L35 11C35 7.68629 32.3137 5 29 5L10.2452 5L1.75708 16.5L10.2452 28Z"
        fill="currentColor"
      />
      <path
        d="M18.9998 43L37.7546 43L46.2427 31.5L38.0004 20.333L38.0004 22C38.0004 26.9706 33.9709 31 29.0004 31L12.9998 31L12.9998 37C12.9998 40.3137 15.6861 43 18.9998 43Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
