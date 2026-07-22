import type { SVGProps } from "react";

export const WaveformLinesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 1L12 31L10 31L10 1L12 1Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 6L17 26L15 26L15 6L17 6Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 9L27 23L25 23L25 9L27 9Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 13L22 19L20 19L20 13L22 13Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M32 14L32 18L30 18L30 14L32 14Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 7L7 25L5 25L5 7L7 7Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 13L2 19L5.95452e-08 19L0 13L2 13Z" fill="currentColor" />
    </svg>
  );
};
