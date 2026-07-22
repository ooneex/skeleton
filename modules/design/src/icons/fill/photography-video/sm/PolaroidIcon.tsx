import type { SVGProps } from "react";

export const PolaroidIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 17H21V21H3V17Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 2C20.6569 2 22 3.34315 22 5L22 19C22 20.6569 20.6569 22 19 22L5 22C3.34314 22 2 20.6569 2 19L2 5C2 3.34314 3.34315 2 5 2L19 2ZM20 5C20 4.44772 19.5523 4 19 4L5 4C4.44772 4 4 4.44771 4 5L4 19C4 19.5523 4.44771 20 5 20L19 20C19.5523 20 20 19.5523 20 19L20 5Z"
        fill="currentColor"
      />
    </svg>
  );
};
