import type { SVGProps } from "react";

export const VideoPlaylistIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M10 8H38V11H10V8Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 2H34V5H14V2Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 44C41.3137 44 44 41.3137 44 38L44 20C44 16.6863 41.3137 14 38 14L10 14C6.68629 14 4 16.6863 4 20L4 38C4 41.3137 6.68629 44 10 44L38 44ZM33.0883 29L19 21.3154V36.6845L33.0883 29Z"
        fill="currentColor"
      />
    </svg>
  );
};
