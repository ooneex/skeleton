import type { SVGProps } from "react";

export const SimCardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 26C28 28.2091 26.2091 30 24 30L8 30C5.79086 30 4 28.2091 4 26V12.2803C4 11.2371 4.40756 10.2352 5.13576 9.48815L11.258 3.20785C12.0109 2.43555 13.0437 2 14.1222 2H24C26.2091 2 28 3.79086 28 6L28 26ZM14 19V21H18V19H14ZM12 19V23H22V25H10V19H12ZM20 21H22V15H10V17H20V21Z"
        fill="currentColor"
      />
    </svg>
  );
};
