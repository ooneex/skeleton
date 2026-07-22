import type { SVGProps } from "react";

export const ArrowRightToLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 2L27 2L27 30L29 30L29 2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 17L23 17L23 15L2 15L2 17Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5857 24.9998L21.5857 15.9998L12.5857 6.99985L13.9999 5.58564L24.4141 15.9998L13.9999 26.4141L12.5857 24.9998Z"
        fill="currentColor"
      />
    </svg>
  );
};
