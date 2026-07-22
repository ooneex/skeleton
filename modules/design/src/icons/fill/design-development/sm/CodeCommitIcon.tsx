import type { SVGProps } from "react";

export const CodeCommitIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13 20V24H11V20H13Z" fill="currentColor" data-color="color-2" />
      <path
        d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 0V8H11V0H13Z" fill="currentColor" />
    </svg>
  );
};
