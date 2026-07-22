import type { SVGProps } from "react";

export const LayersStackedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.38184 19H45.6179L40.6179 29H2.38184L7.38184 19Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.38184 6H45.6179L40.6179 16H2.38184L7.38184 6Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.38184 32H45.6179L40.6179 42H2.38184L7.38184 32Z"
        fill="currentColor"
      />
    </svg>
  );
};
