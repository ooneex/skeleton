import type { SVGProps } from "react";

export const CanvasIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5 28H9.5V26H22.5V28Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 0V5H15V0H17Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0715 22.6287L11.9284 23.3714L8.55703 31.7999L6.70007 31.0572L10.0715 22.6287Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.9285 22.6287L20.0716 23.3714L23.443 31.7999L25.2999 31.0572L21.9285 22.6287Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M30 3L30 24L2 24L2 3L30 3Z" fill="currentColor" />
    </svg>
  );
};
