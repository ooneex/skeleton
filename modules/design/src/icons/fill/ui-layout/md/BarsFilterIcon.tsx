import type { SVGProps } from "react";

export const BarsFilterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="5" y="13" width="22" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="1" y="7" width="30" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="9" y="19" width="14" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="13" y="25" width="6" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
