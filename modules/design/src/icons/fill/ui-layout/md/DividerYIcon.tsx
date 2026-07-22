import type { SVGProps } from "react";

export const DividerYIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 17L31 17L31 15L1 15L1 17Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 1H28V13H4V1Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 19H28V31H4V19Z" fill="currentColor" />
    </svg>
  );
};
