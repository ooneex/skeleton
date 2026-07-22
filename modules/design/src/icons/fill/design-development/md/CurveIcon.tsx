import type { SVGProps } from "react";

export const CurveIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 29L2.99999 29L2.99999 3L4.99999 3L4.99999 27L29 27L29 29Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 24H28V4C24.6471 4 22.4147 5.25892 20.8263 7.17412C19.3192 8.99119 18.4212 11.3738 17.5966 13.5615C17.5858 13.5901 17.575 13.6187 17.5643 13.6473C16.7014 15.9362 15.9067 18.015 14.6343 19.5491C13.4236 21.0089 11.7542 22 8 22V24Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
