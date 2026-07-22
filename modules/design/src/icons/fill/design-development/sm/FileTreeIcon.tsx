import type { SVGProps } from "react";

export const FileTreeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 5H11V7H4V5Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 0V17H11V19H3V0H5Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 1H17.6L21 4.2381V11H13V1Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 13H17.6L21 16.2381V23H13V13Z" fill="currentColor" />
    </svg>
  );
};
