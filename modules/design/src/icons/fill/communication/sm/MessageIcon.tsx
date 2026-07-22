import type { SVGProps } from "react";

export const MessageIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m20,2H4c-1.654,0-3,1.346-3,3v10c0,1.654,1.346,3,3,3h1v5.943l8.32-5.943h6.68c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
