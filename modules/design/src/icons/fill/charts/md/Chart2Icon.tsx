import type { SVGProps } from "react";

export const Chart2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="12" y="11" width="7" height="19" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="2" y="20" width="7" height="10" strokeWidth="0" fill="currentColor" />
      <rect x="22" y="2" width="8" height="28" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
