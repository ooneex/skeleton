import type { SVGProps } from "react";

export const ThumbsUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10 12L13.4091 2.74737C13.7562 1.72088 14.7584 1.06318 15.8382 1.15317C17.0601 1.25499 18 2.27644 18 3.50258V11L26.6976 11C28.7849 11 30.2342 13.0786 29.5126 15.0371L25.0651 27.1087C24.4373 28.8127 22.7403 29.88 20.9325 29.7079L10 28.6667V12Z"
        fill="currentColor"
      />
      <path d="M8 12H3V28L8 28.4762V12Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
