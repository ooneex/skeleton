import type { SVGProps } from "react";

export const ArrowUpLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.4143 20L4.70718 3.29286L3.29297 4.70708L20.0001 21.4142L21.4143 20Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 12V5H12V3H3V12H5Z" fill="currentColor" />
    </svg>
  );
};
