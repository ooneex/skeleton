import type { SVGProps } from "react";

export const MenuBarsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="25" y="5" width="5" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="2" y="5" width="20" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="15" width="5" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="10" y="15" width="20" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="25" y="25" width="5" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="2" y="25" width="20" height="2" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
