import type { SVGProps } from "react";

export const LinesYIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 15V43H13.5V15H16.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M25.5 26V43H22.5V26H25.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.5 15V43H31.5V15H34.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M43.5 26V43H40.5V26H43.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7.5 6V43H4.5V6H7.5Z" fill="currentColor" />
    </svg>
  );
};
