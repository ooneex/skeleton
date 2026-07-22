import type { SVGProps } from "react";

export const Sparkle3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3.02679L29.5193 18.4807L44.9732 24L29.5193 29.5193L24 44.9732L18.4807 29.5193L3.02679 24L18.4807 18.4807L24 3.02679Z"
        fill="currentColor"
      />
      <path
        d="M10.5 7.5L9 4L7.5 7.5L4 9L7.5 10.5L9 14L10.5 10.5L14 9L10.5 7.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M38.9 37.1L38 35L37.1 37.1L35 38L37.1 38.9L38 41L38.9 38.9L41 38L38.9 37.1Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
