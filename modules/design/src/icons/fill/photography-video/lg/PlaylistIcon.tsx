import type { SVGProps } from "react";

export const PlaylistIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 40H42V43H6V40Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 32C44 34.7614 41.7614 37 39 37L9 37C6.23857 37 4 34.7614 4 32L4 11C4 8.23858 6.23858 6 9 6L39 6C41.7614 6 44 8.23858 44 11L44 32ZM33.0883 21.5L19 13.8155V29.1845L33.0883 21.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
