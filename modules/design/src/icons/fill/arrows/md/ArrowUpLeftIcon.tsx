import type { SVGProps } from "react";

export const ArrowUpLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.4142 28L4.70706 3.29286L3.29285 4.70708L28 29.4142L29.4142 28Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 16V5H16V3H3V16H5Z" fill="currentColor" />
    </svg>
  );
};
