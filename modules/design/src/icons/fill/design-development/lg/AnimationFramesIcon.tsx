import type { SVGProps } from "react";

export const AnimationFramesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 15L3 33L12 33L12 15L3 15Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 15L36 33L45 33L45 15L36 15Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 42L46 42L46 6L2 6L2 42ZM5 9L43 9L43 39L5 39L5 9Z"
        fill="currentColor"
      />
      <path d="M17 36L17 12L31 12L31 36L17 36Z" fill="currentColor" />
    </svg>
  );
};
