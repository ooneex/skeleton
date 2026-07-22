import type { SVGProps } from "react";

export const HeartbeatIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M26 19.9364C28.0138 17.5347 29.5 14.8612 29.5 12.2761C29.5 8.25788 26.2438 5 22.2316 5C19.5856 5 17.6092 6.66141 16 8.52577C14.3935 6.65871 12.4144 5 9.7684 5C5.7535 5 2.5 8.25788 2.5 12.2761C2.5 14.8612 3.98623 17.5347 6 19.9364"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M2 24H10L13 19L19 28L22 24H30"
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
