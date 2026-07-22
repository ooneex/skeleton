import type { SVGProps } from "react";

export const ParagraphAddIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 16.5H44V19.5H4V16.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 4.5H44V7.5H4V4.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 28.5H22V31.5H4V28.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 40.5H22V43.5H4V40.5Z" fill="currentColor" />
      <path
        d="M38.5 34.5V27H35.5L35.5 34.5H28V37.5H35.5L35.5 45H38.5V37.5H46V34.5H38.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
