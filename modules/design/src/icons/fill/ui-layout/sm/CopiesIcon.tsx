import type { SVGProps } from "react";

export const CopiesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="4" y="5" width="16" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="7" y="1" width="10" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="1" y="9" width="22" height="13" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
