import type { SVGProps } from "react";

export const MusicPlaylistIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 4L36.1703 7.18173C38.298 8.49109 40.7473 9.18435 43.2456 9.18435H44V17.1843H41.6426C39.7195 17.1843 37.8112 16.8481 36.0039 16.1909L34 15.4623V36.1843H31V4Z"
        fill="currentColor"
      />
      <path
        d="M26 43.1844C30.4183 43.1844 34 40.0504 34 36.1844C34 32.3184 30.4183 29.1844 26 29.1844C21.5817 29.1844 18 32.3184 18 36.1844C18 40.0504 21.5817 43.1844 26 43.1844Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 13L21 13L21 16L6 16L6 13Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 20L21 20L21 23L6 23L6 20Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 6L14 6L14 9L6 9L6 6Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
