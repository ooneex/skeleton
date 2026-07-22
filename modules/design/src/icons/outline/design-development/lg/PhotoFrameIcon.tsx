import type { SVGProps } from "react";

export const PhotoFrameIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 36C28.9706 36 33 30.6274 33 24C33 17.3726 28.9706 12 24 12C19.0294 12 15 17.3726 15 24C15 30.6274 19.0294 36 24 36Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M40 39V9C36.3183 9 33.5 6.51432 33.5 3H14.5C14.5 6.51432 11.6817 9 8 9V39C11.6817 39 14.5 41.4857 14.5 45H33.5C33.5 41.4857 36.3183 39 40 39Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
