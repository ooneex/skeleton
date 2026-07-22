import type { SVGProps } from "react";

export const WindIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5 16H28C31.3137 16 34 13.3137 34 10V9.68154C34 6.54372 31.4563 4 28.3185 4V4C25.7663 4 23.5273 5.70183 22.8442 8.16091L22.75 8.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M5 24H39C42.3137 24 45 26.6863 45 30V30.3185C45 33.4563 42.4563 36 39.3185 36V36C36.7663 36 34.5273 34.2982 33.8442 31.8391L33.75 31.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M5 32H17C20.3137 32 23 34.6863 23 38V38.3185C23 41.4563 20.4563 44 17.3185 44V44C14.7663 44 12.5273 42.2982 11.8442 39.8391L11.75 39.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
