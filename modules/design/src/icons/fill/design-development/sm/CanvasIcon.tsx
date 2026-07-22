import type { SVGProps } from "react";

export const CanvasIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17 22H7V20H17V22Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.06037 16.6582L8.93995 17.3417L6.59808 23.7815L4.71851 23.098L7.06037 16.6582Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9396 16.6582L15.0601 17.3417L17.4019 23.7815L19.2815 23.098L16.9396 16.6582Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 0V4H11V0H13Z" fill="currentColor" data-color="color-2" />
      <path d="M22 2H2V18H22V2Z" fill="currentColor" />
    </svg>
  );
};
