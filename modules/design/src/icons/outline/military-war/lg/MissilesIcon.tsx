import type { SVGProps } from "react";

export const MissilesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 32L8.5 35.5L10.5 37.5L12.5 39.5L16 36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M27 29L28.986 32.6411C29.5939 33.7555 29.4346 35.132 28.5881 36.078L21.5 44L18.337 37.7031"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M18 22L14.3453 20.0065C13.2375 19.4023 11.8701 19.5558 10.9239 20.3907L3.99997 26.5L10.3629 29.6488"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M29 11L37 19" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M18 38L39.8591 16.1409C41.2551 14.7449 42.2066 12.967 42.5938 11.031L43.9265 4.36772C43.9614 4.19279 43.8072 4.03856 43.6323 4.07354L36.969 5.40621C35.033 5.79339 33.2551 6.74494 31.8591 8.14095L10 30L18 38Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
