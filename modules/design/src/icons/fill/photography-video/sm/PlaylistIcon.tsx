import type { SVGProps } from "react";

export const PlaylistIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 20H21V22H3V20Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 2C21.6569 2 23 3.34315 23 5V15C23 16.6569 21.6569 18 20 18H4C2.34314 18 1 16.6569 1 15V5C1 3.34315 2.34315 2 4 2H20ZM15.5 10L9.5 6.5V13.5L15.5 10Z"
        fill="currentColor"
      />
    </svg>
  );
};
