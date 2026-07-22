import type { SVGProps } from "react";

export const ChatBubblePlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m20,3h-10v2c0,1.104-.896,2-2,2h-1v1c0,1.104-.896,2-2,2h-2v13.135l7.362-6.135h9.638c1.654,0,3-1.346,3-3V6c0-1.654-1.346-3-3-3Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <polygon
        points="8 3 5 3 5 0 3 0 3 3 0 3 0 5 3 5 3 8 5 8 5 5 8 5 8 3"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
