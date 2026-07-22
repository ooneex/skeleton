import type { SVGProps } from "react";

export const HeartsSuitIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 28C18.9943 26.6471 29.5 19.1491 29.5 12.2761C29.5 8.25788 26.2438 5 22.2316 5C19.5856 5 17.6092 6.66141 16 8.52577C14.3935 6.65871 12.4144 5 9.7684 5C5.7535 5 2.5 8.25788 2.5 12.2761C2.5 19.1491 13.0057 26.6471 16 28Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
