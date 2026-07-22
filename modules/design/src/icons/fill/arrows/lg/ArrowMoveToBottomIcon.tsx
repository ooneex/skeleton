import type { SVGProps } from "react";

export const ArrowMoveToBottomIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 7H44V4H4V7Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 19.5H17.5V16.5H4V19.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M30.5 19.5H44V16.5H30.5V19.5Z" fill="currentColor" />
      <path
        d="M22.5 12H25.5V38.3789L33.0002 30.8787L35.1215 33L24.0002 44.1213L12.8789 33L15.0002 30.8787L22.5 38.3785V12Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
