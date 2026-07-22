import type { SVGProps } from "react";

export const ResizeX2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 3V21H1V3H3Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M23 3V21H21V3H23Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9999 16.9142L20.9141 12L15.9999 7.08582L14.5857 8.50003L18.0857 12L14.5857 15.5L15.9999 16.9142Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00009 16.9142L3.08588 12L8.00009 7.08582L9.4143 8.50003L5.91431 12L9.41431 15.5L8.00009 16.9142Z"
        fill="currentColor"
      />
    </svg>
  );
};
