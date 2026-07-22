import type { SVGProps } from "react";

export const CameraHeartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M30.5 25L30.5 10C30.5 8.34315 29.1569 7 27.5 7L23.5 7L20.5 3L12.5 3L9.5 7L5.5 7C3.84315 7 2.5 8.34315 2.5 10L2.5 25C2.5 26.6569 3.84315 28 5.5 28L27.5 28C29.1569 28 30.5 26.6569 30.5 25Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16.5 23C18.0526 22.2941 23.5 18.3821 23.5 14.7962C23.5 12.6998 21.8116 11 19.7312 11C18.3592 11 17.3344 11.8668 16.5 12.8395C15.667 11.8654 14.6408 11 13.2688 11C11.187 11 9.5 12.6998 9.5 14.7962C9.5 18.3821 14.9474 22.2941 16.5 23Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
