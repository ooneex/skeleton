import type { SVGProps } from "react";

export const ChartBarAxisXIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="1" y="28" width="30" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="2" y="12" width="8" height="14" strokeWidth="0" fill="currentColor" />
      <rect x="12" y="2" width="8" height="24" strokeWidth="0" fill="currentColor" />
      <rect x="22" y="17" width="8" height="9" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
