import type { SVGProps } from "react";

export const Grid3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="22" y="2" width="8" height="8" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="12" y="12" width="8" height="8" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="2" y="22" width="8" height="8" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="2" y="2" width="8" height="8" strokeWidth="0" fill="currentColor" />
      <rect x="12" y="2" width="8" height="8" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="12" width="8" height="8" strokeWidth="0" fill="currentColor" />
      <rect x="22" y="12" width="8" height="8" strokeWidth="0" fill="currentColor" />
      <rect x="12" y="22" width="8" height="8" strokeWidth="0" fill="currentColor" />
      <rect x="22" y="22" width="8" height="8" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
