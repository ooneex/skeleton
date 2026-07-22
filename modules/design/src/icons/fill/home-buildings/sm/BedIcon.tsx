import type { SVGProps } from "react";

export const BedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 14H22V19H2V14Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 8H7C9.20914 8 11 9.79086 11 12H5V8Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 4V21H1V4H3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M23 10L23 21L21 21L21 10L23 10Z" fill="currentColor" />
    </svg>
  );
};
