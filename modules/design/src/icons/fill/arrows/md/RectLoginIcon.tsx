import type { SVGProps } from "react";

export const RectLoginIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M11 5C11 2.79086 12.7909 1 15 1H25C27.2091 1 29 2.79086 29 5V27C29 29.2091 27.2091 31 25 31H15C12.7909 31 11 29.2091 11 27V17H14V23L22 16L14 9V15H11V5Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 15H11V17H2V15Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
