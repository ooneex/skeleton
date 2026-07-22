import type { SVGProps } from "react";

export const MenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="1" y="15" width="30" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="1" y="6" width="30" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="1" y="24" width="30" height="2" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
