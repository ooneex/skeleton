import type { SVGProps } from "react";

export const MessageIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m27,3H5c-2.206,0-4,1.794-4,4v14c0,2.206,1.794,4,4,4h3v6.869l10.303-6.869h8.697c2.206,0,4-1.794,4-4V7c0-2.206-1.794-4-4-4Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
