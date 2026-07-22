import type { SVGProps } from "react";

export const Sparkle3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 5L19 13L27 16L19 19L16 27L13 19L5 16L13 13L16 5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M8.2 5.8L7 3L5.8 5.8L3 7L5.8 8.2L7 11L8.2 8.2L11 7L8.2 5.8Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
