import type { SVGProps } from "react";

export const Sparkle3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 4L14.5263 9.47368L20 12L14.5263 14.5263L12 20L9.47368 14.5263L4 12L9.47368 9.47368L12 4Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M5.55 3.45L4.5 1L3.45 3.45L1 4.5L3.45 5.55L4.5 8L5.55 5.55L8 4.5L5.55 3.45Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
