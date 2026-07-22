import type { SVGProps } from "react";

export const BulletListIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="14" y="6" width="16" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="14" y="13" width="16" height="2" strokeWidth="0" fill="currentColor" />
      <circle cx="6" cy="7" r="4" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="6" cy="21" r="4" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="14" y="20" width="16" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="14" y="27" width="16" height="2" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
