import type { SVGProps } from "react";

export const PhotoFrameIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.33333 0V1C6.33333 2.28855 5.28855 3.33333 4 3.33333H3V20.6667H4C5.28855 20.6667 6.33333 21.7115 6.33333 23V24H17.6667V23C17.6667 21.7115 18.7115 20.6667 20 20.6667H21V3.33333H20C18.7115 3.33333 17.6667 2.28855 17.6667 1V0H6.33333ZM16 12C16 15.0376 14.2091 17.5 12 17.5C9.79086 17.5 8 15.0376 8 12C8 8.96243 9.79086 6.5 12 6.5C14.2091 6.5 16 8.96243 16 12Z"
        fill="currentColor"
      />
    </svg>
  );
};
