import type { SVGProps } from "react";

export const SubtitlesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 28C29.2091 28 31 26.2091 31 24L31 8C31 5.79086 29.2091 4 27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28L27 28ZM7 21H18V23H7V21ZM20 21V23H25V21H20ZM25 16H14V18H25V16ZM7 16V18H12V16H7Z"
        fill="currentColor"
      />
    </svg>
  );
};
