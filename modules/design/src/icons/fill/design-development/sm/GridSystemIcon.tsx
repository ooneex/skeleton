import type { SVGProps } from "react";

export const GridSystemIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11 4H1V11L11 11V4Z" fill="currentColor" />
      <path d="M23 13H1V20L23 20V13Z" fill="currentColor" data-color="color-2" />
      <path d="M23 4H13V11L23 11V4Z" fill="currentColor" />
    </svg>
  );
};
