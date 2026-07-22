import type { SVGProps } from "react";

export const ThumbsUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M10 12V28.5" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M13.4091 2.74738L10.2803 12L3 12L3 28L20.9325 29.7079C22.7403 29.88 24.4373 28.8128 25.0651 27.1087L29.5126 15.0371C30.2342 13.0786 28.7849 11 26.6976 11L18 11L18 3.5026C18 2.27646 17.0601 1.255 15.8382 1.15318C14.7584 1.06319 13.7562 1.72089 13.4091 2.74738Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
