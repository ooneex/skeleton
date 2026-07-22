import type { SVGProps } from "react";

export const ClearTextFormattingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17 4V16H15V4H17Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 4H27V6H5V4Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.4142 3L3 30.4142L1.58578 29L29 1.58579L30.4142 3Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 20V28H15V20H17Z" fill="currentColor" />
    </svg>
  );
};
