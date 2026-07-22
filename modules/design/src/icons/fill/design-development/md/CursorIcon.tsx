import type { SVGProps } from "react";

export const CursorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 27.6429L14.6603 18.3032L8.94493 23.9553L4.14172 4.14185L23.9552 8.94501L18.3032 14.6603L27.6428 24.0001L24 27.6429Z"
        fill="currentColor"
      />
    </svg>
  );
};
