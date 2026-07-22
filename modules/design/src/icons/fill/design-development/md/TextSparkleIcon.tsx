import type { SVGProps } from "react";

export const TextSparkleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M26.85 16.15L25.5 13L24.15 16.15L21 17.5L24.15 18.85L25.5 22L26.85 18.85L30 17.5L26.85 16.15Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M6.9 13.1L6 11L5.1 13.1L3 14L5.1 14.9L6 17L6.9 14.9L9 14L6.9 13.1Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M10.6 22.4L10 21L9.4 22.4L8 23L9.4 23.6L10 25L10.6 23.6L12 23L10.6 22.4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 4V28H15V4H17Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 4H27V6H5V4Z" fill="currentColor" />
    </svg>
  );
};
