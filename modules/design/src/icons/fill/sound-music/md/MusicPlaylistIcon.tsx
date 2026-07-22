import type { SVGProps } from "react";

export const MusicPlaylistIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 8L14 8L14 10L3 10L3 8Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 13L14 13L14 15L3 15L3 13Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 3L9 3L9 5L3 5L3 3Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 2L23.9333 4.2C25.4912 5.3684 27.386 6 29.3333 6H31V12H28.2868C26.6312 12 24.9969 11.6263 23.5058 10.9067L23 10.6626V24H21V2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 24C10 20.5987 13.002 18 16.5 18C19.998 18 23 20.5987 23 24C23 27.4013 19.998 30 16.5 30C13.002 30 10 27.4013 10 24Z"
        fill="currentColor"
      />
    </svg>
  );
};
