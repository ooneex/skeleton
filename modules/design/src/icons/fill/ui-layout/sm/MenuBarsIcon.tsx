import type { SVGProps } from "react";

export const MenuBarsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="19" y="4" width="4" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="1" y="4" width="16" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="1" y="11" width="4" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="7" y="11" width="16" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="19" y="18" width="4" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="1" y="18" width="16" height="2" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
