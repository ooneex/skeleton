import type { SVGProps } from "react";

export const GridLayoutIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15 20L15 29L3 29L3 20L15 20Z" fill="currentColor" data-color="color-2" />
      <path d="M29 12L29 3L17 3L17 12L29 12Z" fill="currentColor" data-color="color-2" />
      <path d="M15 3L15 18L3 18L3 3L15 3Z" fill="currentColor" />
      <path d="M29 29L29 14L17 14L17 29L29 29Z" fill="currentColor" />
    </svg>
  );
};
