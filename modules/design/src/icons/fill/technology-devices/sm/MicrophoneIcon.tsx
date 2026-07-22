import type { SVGProps } from "react";

export const MicrophoneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6L17 10C17 12.7614 14.7614 15 12 15C9.23858 15 7 12.7614 7 10L7 6Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 9L21 10C21 14.9706 16.9706 19 12 19C7.02944 19 3 14.9706 3 10L3 9L5 9L5 10C5 13.866 8.13401 17 12 17C15.866 17 19 13.866 19 10L19 9L21 9Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 17V23H11V17H13Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7 21H17V23H7V21Z" fill="currentColor" />
    </svg>
  );
};
