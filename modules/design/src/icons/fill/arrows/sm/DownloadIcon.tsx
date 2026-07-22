import type { SVGProps } from "react";

export const DownloadIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13 2V10H11V2H13Z" fill="currentColor" data-color="color-2" />
      <path d="M11 10H4L2 21H22L20 10H13V14H15.5H16.5L12 18.9142L7.5 14H8.5H11V10Z" fill="currentColor" />
    </svg>
  );
};
