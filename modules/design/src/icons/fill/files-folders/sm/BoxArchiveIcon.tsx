import type { SVGProps } from "react";

export const BoxArchiveIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 8L1 2L23 2L23 8L1 8Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 19C22 20.6569 20.6569 22 19 22L5 22C3.34315 22 2 20.6569 2 19V10L22 10L22 19ZM15 14V12L9 12V14L15 14Z"
        fill="currentColor"
      />
    </svg>
  );
};
