import type { SVGProps } from "react";

export const ChatBubbleForwardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m27,2H5C2.794,2,1,3.794,1,6v6h13.586l-4-4,1.414-1.414,6.414,6.414-6.414,6.414-1.414-1.414,4-4H1v5c0,2.206,1.794,4,4,4h3v6.869l10.303-6.869h8.697c2.206,0,4-1.794,4-4V6c0-2.206-1.794-4-4-4Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
