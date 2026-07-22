import type { SVGProps } from "react";

export const VoiceChatIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2C2.34272 2 1 3.34272 1 5V16C1 17.6573 2.34272 19 4 19H8.5L12 23.6667L15.5 19H20C21.6573 19 23 17.6573 23 16V5C23 3.34272 21.6573 2 20 2H4ZM7 9V12H5V9H7ZM11 6H9V15H11V6ZM15 8V13H13V8H15ZM19 9H17V12H19V9Z"
        fill="currentColor"
      />
    </svg>
  );
};
