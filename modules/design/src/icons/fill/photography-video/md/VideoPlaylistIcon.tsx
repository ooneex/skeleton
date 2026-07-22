import type { SVGProps } from "react";

export const VideoPlaylistIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 6H26V8H6V6Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M9 2H23V4H9V2Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 25C30 27.2091 28.2091 29 26 29L6 29C3.79086 29 2 27.2091 2 25V14C2 11.7909 3.79086 10 6 10H26C28.2091 10 30 11.7909 30 14L30 25ZM22.5156 19.5L12.5 13.7768V25.2232L22.5156 19.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
