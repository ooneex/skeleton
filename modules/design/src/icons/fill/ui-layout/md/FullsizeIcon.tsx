import type { SVGProps } from "react";

export const FullsizeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="9" y="10" width="14" height="12" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="5" y="6" width="2" height="20" strokeWidth="0" fill="currentColor" />
      <rect x="25" y="6" width="2" height="20" strokeWidth="0" fill="currentColor" />
      <rect x="1" y="2" width="2" height="28" strokeWidth="0" fill="currentColor" />
      <rect x="29" y="2" width="2" height="28" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
