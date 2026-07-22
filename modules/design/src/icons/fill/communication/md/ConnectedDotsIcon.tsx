import type { SVGProps } from "react";

export const ConnectedDotsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="22.458 21.755 17 17.511 17 11 15 11 15 17.511 9.542 21.755 10.77 23.334 16 19.267 21.23 23.334 22.458 21.755"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <circle cx="16" cy="7" r="5" strokeWidth="0" fill="currentColor" />
      <circle cx="7" cy="25" r="5" strokeWidth="0" fill="currentColor" />
      <circle cx="25" cy="25" r="5" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
