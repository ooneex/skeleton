import type { SVGProps } from "react";

export const LiftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon points="20.5 5.333 17 10 24 10 20.5 5.333" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <polygon points="20.5 18.667 24 14 17 14 20.5 18.667" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="1" y="2" width="6" height="20" strokeWidth="0" fill="currentColor" />
      <rect x="9" y="2" width="6" height="20" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
